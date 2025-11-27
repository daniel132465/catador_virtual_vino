from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import joblib
import pandas as pd
import numpy as np
import os

# Inicializar la aplicación
app = FastAPI(title="API Catador Virtual", description="API para predicción de calidad de vino", version="1.0.0")

# Configurar CORS
origins = [
    "http://localhost:5173",  # Puerto por defecto de Vite
    "http://localhost:3000",
    "*" # Permitir todo en desarrollo
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Cargar Modelo y Escalador
# Se asume que los archivos .pkl están en la misma carpeta que main.py o en la raíz del backend
MODEL_PATH = "modelo_catador_vino.pkl"
SCALER_PATH = "escalador_vino.pkl"

model = None
scaler = None

try:
    if os.path.exists(MODEL_PATH):
        model = joblib.load(MODEL_PATH)
        print(f"Modelo cargado desde {MODEL_PATH}")
    else:
        print(f"ADVERTENCIA: No se encontró {MODEL_PATH}")

    if os.path.exists(SCALER_PATH):
        scaler = joblib.load(SCALER_PATH)
        print(f"Escalador cargado desde {SCALER_PATH}")
    else:
        print(f"ADVERTENCIA: No se encontró {SCALER_PATH}")
except Exception as e:
    print(f"Error al cargar los archivos: {e}")

# Definir el modelo de datos de entrada
class WineInput(BaseModel):
    fixed_acidity: float
    volatile_acidity: float
    citric_acid: float
    residual_sugar: float
    chlorides: float
    free_sulfur_dioxide: float
    total_sulfur_dioxide: float
    density: float
    pH: float
    sulphates: float
    alcohol: float

@app.get("/")
def read_root():
    return {"message": "API del Catador Virtual funcionando correctamente"}

@app.post("/predict")
def predict_quality(wine: WineInput):
    if not model or not scaler:
        raise HTTPException(status_code=500, detail="El modelo o el escalador no están cargados en el servidor.")

    try:
        # Convertir datos a DataFrame
        data_dict = wine.dict()
        df = pd.DataFrame([data_dict])
        
        # Renombrar columnas para coincidir con los nombres del entrenamiento (espacios en lugar de guiones bajos)
        column_mapping = {
            'fixed_acidity': 'fixed acidity',
            'volatile_acidity': 'volatile acidity',
            'citric_acid': 'citric acid',
            'residual_sugar': 'residual sugar',
            'chlorides': 'chlorides',
            'free_sulfur_dioxide': 'free sulfur dioxide',
            'total_sulfur_dioxide': 'total sulfur dioxide',
            'density': 'density',
            'pH': 'pH',
            'sulphates': 'sulphates',
            'alcohol': 'alcohol'
        }
        
        df = df.rename(columns=column_mapping)
        
        # Asegurar el orden correcto de las columnas
        columns_order = [
            'fixed acidity', 'volatile acidity', 'citric acid', 'residual sugar',
            'chlorides', 'free sulfur dioxide', 'total sulfur dioxide', 'density',
            'pH', 'sulphates', 'alcohol'
        ]
        
        df = df[columns_order]

        # Escalar los datos
        scaled_data = scaler.transform(df)

        # Realizar la predicción
        prediction = model.predict(scaled_data)
        
        # El resultado suele ser un array, tomamos el primer valor
        result_value = int(prediction[0])

        # Mapear resultado
        # Asumimos: 1 = BUENO/EXCELENTE, 0 = REGULAR/MALO (Ajustar según cómo se entrenó)
        # El prompt dice: { "prediction": "BUENO" } si es 1, { "prediction": "REGULAR" } si es 0.
        prediction_label = "BUENO" if result_value == 1 else "REGULAR"

        return {"prediction": prediction_label, "raw_value": result_value}

    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error al procesar la predicción: {str(e)}")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)

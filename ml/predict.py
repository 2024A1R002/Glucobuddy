import joblib
import pandas as pd

model = joblib.load("glucobuddy_glucose_model.pkl")

input_data = pd.DataFrame([{
    "bg-0:00": 8.0,
    "insulin-0:00": 1.0,
    "hr-0:00": 70.0,
    "cals-0:00": 10.0
}])

prediction = model.predict(input_data)

print("Predicted glucose:", prediction[0])
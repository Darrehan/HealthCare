# Python script to train eye disease model
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
import pandas as pd

# Load data
data = pd.read_csv('eye_disease_data.csv')
X = data.drop('disease', axis=1)
y = data['disease']

# Train model
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)
model = RandomForestClassifier()
model.fit(X_train, y_train)

# Save model
import joblib
joblib.dump(model, 'eye_disease_model.pkl')
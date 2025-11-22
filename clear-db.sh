#!/bin/bash

echo "Очистка БД для проекта denis (training_manager)..."

mongosh "mongodb://127.0.0.1:27017/?replicaSet=rs0" <<EOF
use training_manager
db.Client.deleteMany({})
db.Trainer.deleteMany({})
db.TrainingPlan.deleteMany({})
db.ExerciseLibrary.deleteMany({})
print("Все коллекции очищены!")
EOF

echo "Готово!"




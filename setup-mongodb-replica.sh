#!/bin/bash
# Скрипт для настройки MongoDB как одноузлового replica set
# Запустите этот скрипт с правами суперпользователя (sudo)

echo "Настройка MongoDB как одноузлового replica set..."

# Проверяем, запущен ли MongoDB
echo ""
echo "Проверка подключения к MongoDB..."
if ! mongosh --eval "db.adminCommand('ping')" > /dev/null 2>&1; then
    echo "ОШИБКА: MongoDB не запущен или недоступен!"
    echo "Убедитесь, что MongoDB установлен и запущен."
    exit 1
fi

echo "MongoDB доступен!"

# Настраиваем replica set
echo ""
echo "Настройка replica set..."

mongosh --eval "
rs.initiate({
  _id: 'rs0',
  members: [
    { _id: 0, host: 'localhost:27017' }
  ]
})
"

if [ $? -eq 0 ]; then
    echo ""
    echo "Replica set успешно настроен!"
    echo "Подождите несколько секунд, пока replica set инициализируется..."
    sleep 5
    
    # Проверяем статус
    echo ""
    echo "Проверка статуса replica set..."
    mongosh --eval "rs.status()"
    
    echo ""
    echo "Готово! MongoDB настроен как replica set."
    echo "Теперь вы можете запустить приложение."
else
    echo ""
    echo "ОШИБКА при настройке replica set!"
    echo "Попробуйте выполнить команду вручную:"
    echo "mongosh --eval \"rs.initiate({_id: 'rs0', members: [{_id: 0, host: 'localhost:27017'}]})\""
    exit 1
fi






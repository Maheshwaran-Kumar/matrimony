import pandas as pd
import mysql.connector


conn = mysql.connector.connect(
    host="localhost",
    user="root",
    password="Mahesh@123",
    database="matrimony"
)


df = pd.read_sql("SELECT * FROM groom", conn)

df.to_csv("data.csv", index=False)

print("Exported to data.csv")


conn.close()


import os
from flask import Flask, render_template,jsonify,request
from pymongo import MongoClient
from bson import ObjectId
import json
class JSONEncoder(json.JSONEncoder):
    def default(self, o):
        if isinstance(o, ObjectId):
            return str(o)
        return json.JSONEncoder.default(self, o)




app = Flask(__name__,template_folder="",static_url_path="", static_folder="")
client = MongoClient(
    host="mongo",
    username=os.environ.get("ME_CONFIG_MONGODB_ADMINUSERNAME"),
    password=os.environ.get("ME_CONFIG_MONGODB_ADMINPASSWORD"))
db = client["todosdb"]
coll = db["todoscollection"]
@app.route("/")
def index():
    return render_template('index.html')

@app.route("/gettodos")
def gettodos():
    return JSONEncoder().encode(list(coll.find()))    



@app.route("/addtodo",methods=["POST"])
def addtodo():
    todo = request.get_json(force=True)
    
    res = coll.insert_one(
        todo
    )

    return jsonify(id=str(res.inserted_id),statusCode= 200 )  


@app.route("/edittodo",methods=["POST"])
def edittodo():
    todo = request.get_json(force=True)
  

    coll.update(
    { "_id": ObjectId(todo["id"]) },
    {
        "$set": {
        "tasks": todo["tasks"],
        }
    }
    )

    return jsonify(statusCode= 200 )  
    


@app.route("/deletetodo",methods=["POST"])
def deletetodo():
    todo = request.get_json(force=True)
  
    coll.delete_many({ "_id": ObjectId(todo["id"]) })


    return jsonify(statusCode= 200 )  


@app.route("/delete")
def delete():
    coll.delete_many({})
    return "ok"

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=os.environ.get('PORT', 4000), debug=True)
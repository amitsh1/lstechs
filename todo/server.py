
import os
from flask import Flask, render_template,jsonify,request
from pymongo import MongoClient
app = Flask(__name__,template_folder="build",static_url_path="", static_folder="build")
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
    return jsonify(list(coll.find({},{"_id":False})))


@app.route("/addtodo",methods=["POST"])
def addtodo():
    todo = request.get_json(force=True)
    
    res = coll.insert_one(
        todo
    )
  
    return str(res.inserted_id)   



@app.route("/delete")
def delete():
    coll.delete_many({})
    return "ok"

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=os.environ.get('PORT', 4000), debug=True)
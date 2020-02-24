What is a Database? 
A collection of stored information.

Why is an Database necessary?
Databases store large amounts of information and allow websites to be able to pull that information.

What can be stored in a Database? 
Anything - objects, arrays

What types of Databases are there? 
SQL, noSQL, and graphical

Why would I use one over the other? 
It depends on what functionality you want.  SQL are relational and can be good, but they are not as easy to use as noSQL DB's.  SQL's are rigid due to data being stored in columns and rows.  Graphical are more dynamic.  So, it all depends on what you want to use the DB for, how comfortable you are with each type, and ultimately, what makes the most sense.  Most things can be done with any type.

What is a Query? 
A query is a set of instructions to pull specific data from a database.

What is Encryption? 
This is a method to protect information by encrypting it.  

Why is it important at the Database level? 
Encryption is really important in the database because bad people could potentially access the database and steal information (such as passwords) to do bad things.

What is Object Permanence? 
This is when an object is there, but you are not able to see it (its always there)

Where can your Database live?
A database can live on the same computer as your web-server (ie. express server on the same computer as database).  It could be in the cloud, using web services such as AWS or AZURE.  It could also be on a computer seperate from the web server, such as the old way of having a server room with a separate web server and database server.

JSON Schema

{
   "$schema": "http://json-schema.org/draft-04/schema#",
   "title": "User",
   "description": "A person",
   "type": "object",
   "properties":
   {
      "fname":
      {
         "description": "A person's first name",
         "type": "string"
      },
      "lname":
      {
         "description": "A person's last name",
         "type": "string",
      }                                                                        "email":
      {
         "description": "A person's preferred email address",
         "type": "string",
      } 
       "password":
      {
         "description": "A person's entered password",
         "type": "string",
      }            
   },
   "required": ["name", "age"]    
}
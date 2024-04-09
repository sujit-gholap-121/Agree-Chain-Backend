const Schemes = [
  {
  name: "activate foreign key",
  query: `PRAGMA foreign_keys = ON`,
},
  {
    name: "User&Admin",
    query: `create table User (Id integer primary key autoincrement,Mobile int unique,Email TEXT unique ,Password TEXT,Account TEXT,Created  date)`,
  },
  {
    name:"Product",
    query: `create table Product (Id int primary key,Name varchar(50), Quantity_Available int,Image Text, Price int ,Owner_Id int,Category varchar(25), foreign key(Owner_Id) references User(Id) on delete cascade )`,
  },
  {
    name: "cart",
    query: `create table Cart (Id int primary key not null,Owner_id int unique not null,foreign key(Id) references User(Id) on delete cascade )`,
  },
  {
    name: "product_added_to_cart",
    query: `create table ProductCart (Id int primary key,Cart_Id int,Product_Id int,Quantity int,foreign key(Cart_Id) references User(Id) on delete cascade,
    foreign key(Product_Id) references Product(Id) on delete cascade )`,
  },
  {
    name: "reviews",
    query: `create table Review (Id int primary key,review TEXT, Product_Id int,Rating int,Created_At date,foreign key(Product_Id) references Product(Id) on delete cascade )`,
  },
  {
    name: "Addresses",
    query: `create table Address (Id int primary key , Owner_Id int ,foreign key(Owner_Id) references User(Id) on delete cascade )`,
  },
  {
    name: "Orders",
    query: `create table Orders (Id int primary key,Address_Id int,Product_Id int,Total_Amount int,Delivery_Status Text,Order_Date date,
      foreign key(Address_Id) references Addresses(Id) on delete cascade ,foreign key(Product_Id) references Product(Id) on delete cascade )`,
  },
];


module.exports=Schemes
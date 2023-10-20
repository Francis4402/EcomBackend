const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config()

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

const port = process.env.PORT || 3000;


app.use(cors());
app.use(express.json());



const uri = `mongodb+srv://${process.env.User_DB}:${process.env.User_pass}@cluster0.cefd8nv.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection


    const CartaddCollection = client.db('EcomDB').collection('CartDetails');
    

    const AppleMobileCollection = client.db('EcomDB').collection('appleMobile');
    const SamsungMobileCollection = client.db('EcomDB').collection('SamsungMobile');
    const GooglePixelMobileCollection = client.db('EcomDB').collection('googlepixelMobile');
    const XiaomiMobileCollection = client.db('EcomDB').collection('XiaomiMobile');
    const RealmeMobileCollection = client.db('EcomDB').collection('RealmeMobile');


    const AppleTabletCollection = client.db('EcomDB').collection('appletablet');
    const GoogleTabletCollection = client.db('EcomDB').collection('googletablet');
    const SamsungTabletCollection = client.db('EcomDB').collection('samsungtablet');
    const XiaomiTabletCollection = client.db('EcomDB').collection('xiaomitablet');
    const LenovoTabletCollection = client.db('EcomDB').collection('lenovo');



    const FantechheadphonesCollection = client.db('EcomDB').collection('FantechHeadphone');
    const HavitheadphonesCollection = client.db('EcomDB').collection('Havitheadphones');
    const BoseheadphonesCollection = client.db('EcomDB').collection('Boseheadphones');
    const GamdiasheadphonesCollection = client.db('EcomDB').collection('Gamdiasheadphones');
    const RazerheadphonesCollection = client.db('EcomDB').collection('Razerheadphones');


    const RazerLaptopCollection = client.db('EcomDB').collection('RazerLaptop');
    const AppleLaptopCollection = client.db('EcomDB').collection('AppleLaptop');
    const HpLaptopCollection = client.db('EcomDB').collection('HpLaptop');
    const DellLaptopCollection = client.db('EcomDB').collection('DellLaptop');
    const AsusLaptopCollection = client.db('EcomDB').collection('AsusLaptop');

    app.get('/cartview', async(req, res) => {
      const cursor = CartaddCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    })

    app.get('/cartview/:id', async (req, res) => {
      const id = req.params.id;
      const query = {_id: id}
      const result = await CartaddCollection.findOne(query);
      res.send(result);
    })

    app.post('/cartview', async (req, res) => {
      const newProduct = req.body;
      const result = await CartaddCollection.insertOne(newProduct);
      res.send(result);
    })

    app.delete('/cartview/:id', async (req, res) => {
      const id = req.params.id;
      const query = {_id: id}
      const result = await CartaddCollection.deleteOne(query);
      res.send(result);
    })

    // mobile

    app.get('/mobiles/applem', async (req, res) => {
      const cursor = AppleMobileCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    })

    app.get('/mobiles/applem/:id', async (req, res) => {
      const id = req.params.id;
      const query = {_id: new ObjectId(id)}
      const result = await AppleMobileCollection.findOne(query);
      res.send(result);
    })

    app.put('/mobiles/applem/:id', async (req, res) => {
      const id = req.params.id;
      const filter = {_id: new ObjectId(id)}
      const options = {upsert: true};
      const updatedProduct = req.body;
      const product = {
        $set: {
          name: updatedProduct.name,
          brandname: updatedProduct.brandname,
          category: updatedProduct.category,
          price: updatedProduct.price,
          shortdescription: updatedProduct.shortdescription,
          rating: updatedProduct.rating,
          photo: updatedProduct.photo
        }
      }

      const result = await AppleMobileCollection.updateOne(filter, product, options);
      res.send(result);
    })

    app.post('/mobiles/applem', async (req, res) => {
      const products = req.body;
      const result = await AppleMobileCollection.insertOne(products);
      res.send(result)
    })

    app.delete('/mobiles/applem/:id', async (req, res) => {
      const id = req.params.id;
      const query = {_id: new ObjectId(id)}
      const result = await AppleMobileCollection.deleteOne(query);
      res.send(result);
    })

    // samsung

    app.get('/mobiles/samsungm', async (req, res) => {
      const cursor = SamsungMobileCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    })

    app.get('/mobiles/samsungm/:id', async (req, res) => {
      const id = req.params.id;
      const query = {_id: new ObjectId(id)}
      const result = await SamsungMobileCollection.findOne(query);
      res.send(result);
    })


    app.put('/mobiles/samsungm/:id', async (req, res) => {
      const id = req.params.id;
      const filter = {_id: new ObjectId(id)}
      const options = {upsert: true};
      const updatedProduct = req.body;
      const product = {
        $set: {
          name: updatedProduct.name,
          brandname: updatedProduct.brandname,
          category: updatedProduct.category,
          price: updatedProduct.price,
          shortdescription: updatedProduct.shortdescription,
          rating: updatedProduct.rating,
          photo: updatedProduct.photo
        }
      }

      const result = await SamsungMobileCollection.updateOne(filter, product, options);
      res.send(result);
    })
    
    app.post('/mobiles/samsungm', async (req, res) => {
      const products = req.body;
      const result = await SamsungMobileCollection.insertOne(products);
      res.send(result);
    })

    app.delete('/mobiles/samsungm/:id', async (req, res) => {
      const id = req.params.id;
      const query = {_id: new ObjectId(id)}
      const result = await SamsungMobileCollection.deleteOne(query);
      res.send(result);
    })

    // google pixel

    app.get('/mobiles/googlem', async (req, res) => {
      const cursor = GooglePixelMobileCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    })

    app.get('/mobiles/googlem/:id', async (req, res) => {
      const id = req.params.id;
      const query = {_id: new ObjectId(id)}
      const result = await GooglePixelMobileCollection.findOne(query);
      res.send(result);
    })

    app.put('/mobiles/googlem/:id', async (req, res) => {
      const id = req.params.id;
      const filter = {_id: new ObjectId(id)}
      const options = {upsert: true};
      const updatedProduct = req.body;
      const product = {
        $set: {
          name: updatedProduct.name,
          brandname: updatedProduct.brandname,
          category: updatedProduct.category,
          price: updatedProduct.price,
          shortdescription: updatedProduct.shortdescription,
          rating: updatedProduct.rating,
          photo: updatedProduct.photo
        }
      }

      const result = await GooglePixelMobileCollection.updateOne(filter, product, options);
      res.send(result);
    })
    
    app.post('/mobiles/googlem', async (req, res) => {
      const products = req.body;
      const result = await GooglePixelMobileCollection.insertOne(products);
      res.send(result);
    })

    app.delete('/mobiles/googlem/:id', async (req, res) => {
      const id = req.params.id;
      const query = {_id: new ObjectId(id)}
      const result = await GooglePixelMobileCollection.deleteOne(query);
      res.send(result);
    })

    //Xiaomi

    app.get('/mobiles/xiaomim', async (req, res) => {
      const cursor = XiaomiMobileCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    })

    app.get('/mobiles/xiaomim/:id', async (req, res) => {
      const id = req.params.id;
      const query = {_id: new ObjectId(id)}
      const result = await XiaomiMobileCollection.findOne(query);
      res.send(result);
    })

    app.put('/mobiles/xiaomim/:id', async (req, res) => {
      const id = req.params.id;
      const filter = {_id: new ObjectId(id)}
      const options = {upsert: true};
      const updatedProduct = req.body;
      const product = {
        $set: {
          name: updatedProduct.name,
          brandname: updatedProduct.brandname,
          category: updatedProduct.category,
          price: updatedProduct.price,
          shortdescription: updatedProduct.shortdescription,
          rating: updatedProduct.rating,
          photo: updatedProduct.photo
        }
      }

      const result = await XiaomiMobileCollection.updateOne(filter, product, options);
      res.send(result);
    })
    
    app.post('/mobiles/xiaomim', async (req, res) => {
      const products = req.body;
      const result = await XiaomiMobileCollection.insertOne(products);
      res.send(result);
    })

    app.delete('/mobiles/xiaomim/:id', async (req, res) => {
      const id = req.params.id;
      const query = {_id: new ObjectId(id)}
      const result = await XiaomiMobileCollection.deleteOne(query);
      res.send(result);
    })

    //Realme
    
    app.get('/mobiles/realmem', async (req, res) => {
      const cursor = RealmeMobileCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    })

    app.get('/mobiles/realmem/:id', async (req, res) => {
      const id = req.params.id;
      const query = {_id: new ObjectId(id)}
      const result = await RealmeMobileCollection.findOne(query);
      res.send(result);
    })

    app.put('/mobiles/realmem/:id', async (req, res) => {
      const id = req.params.id;
      const filter = {_id: new ObjectId(id)}
      const options = {upsert: true};
      const updatedProduct = req.body;
      const product = {
        $set: {
          name: updatedProduct.name,
          brandname: updatedProduct.brandname,
          category: updatedProduct.category,
          price: updatedProduct.price,
          shortdescription: updatedProduct.shortdescription,
          rating: updatedProduct.rating,
          photo: updatedProduct.photo
        }
      }

      const result = await RealmeMobileCollection.updateOne(filter, product, options);
      res.send(result);
    })
    
    app.post('/mobiles/realmem', async (req, res) => {
      const products = req.body;
      const result = await RealmeMobileCollection.insertOne(products);
      res.send(result);
    })

    app.delete('/mobiles/realmem/:id', async (req, res) => {
      const id = req.params.id;
      const query = {_id: new ObjectId(id)}
      const result = await RealmeMobileCollection.deleteOne(query);
      res.send(result);
    })


    // nokia

    app.get('/mobiles/nokiam', async (req, res) => {
      const cursor = XiaomiMobileCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    })

    app.get('/mobiles/nokiam/:id', async (req, res) => {
      const id = req.params.id;
      const query = {_id: new ObjectId(id)}
      const result = await XiaomiMobileCollection.findOne(query);
      res.send(result);
    })

    app.put('/mobiles/nokiam/:id', async (req, res) => {
      const id = req.params.id;
      const filter = {_id: new ObjectId(id)}
      const options = {upsert: true};
      const updatedProduct = req.body;
      const product = {
        $set: {
          name: updatedProduct.name,
          brandname: updatedProduct.brandname,
          category: updatedProduct.category,
          price: updatedProduct.price,
          shortdescription: updatedProduct.shortdescription,
          rating: updatedProduct.rating,
          photo: updatedProduct.photo
        }
      }

      const result = await XiaomiMobileCollection.updateOne(filter, product, options);
      res.send(result);
    })
    
    app.post('/mobiles/nokiam', async (req, res) => {
      const products = req.body;
      const result = await XiaomiMobileCollection.insertOne(products);
      res.send(result);
    })

    app.delete('/mobiles/nokiam/:id', async (req, res) => {
      const id = req.params.id;
      const query = {_id: new ObjectId(id)}
      const result = await XiaomiMobileCollection.deleteOne(query);
      res.send(result);
    })



    //tablet

    app.get('/tablet/applet', async (req, res) => {
      const cursor = AppleTabletCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    })

    app.get('/tablet/applet/:id', async (req, res) => {
      const id = req.params.id;
      const query = {_id: new ObjectId(id)}
      const result = await AppleTabletCollection.findOne(query);
      res.send(result);
    })

    app.put('/tablet/applet/:id', async (req, res) => {
      const id = req.params.id;
      const filter = {_id: new ObjectId(id)}
      const options = {upsert: true};
      const updatedProduct = req.body;
      const product = {
        $set: {
          name: updatedProduct.name,
          brandname: updatedProduct.brandname,
          category: updatedProduct.category,
          price: updatedProduct.price,
          shortdescription: updatedProduct.shortdescription,
          rating: updatedProduct.rating,
          photo: updatedProduct.photo
        }
      }

      const result = await AppleTabletCollection.updateOne(filter, product, options);
      res.send(result);
    })

    app.post('/tablet/applet', async (req, res) => {
      const products = req.body;
      const result = await AppleTabletCollection.insertOne(products);
      res.send(result)
    })

    app.delete('/tablet/applet/:id', async (req, res) => {
      const id = req.params.id;
      const query = {_id: new ObjectId(id)}
      const result = await AppleTabletCollection.deleteOne(query);
      res.send(result);
    })

    // samsung

    app.get('/tablet/googlet', async (req, res) => {
      const cursor = GoogleTabletCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    })

    app.get('/tablet/googlet/:id', async (req, res) => {
      const id = req.params.id;
      const query = {_id: new ObjectId(id)}
      const result = await GoogleTabletCollection.findOne(query);
      res.send(result);
    })


    app.put('/tablet/googlet/:id', async (req, res) => {
      const id = req.params.id;
      const filter = {_id: new ObjectId(id)}
      const options = {upsert: true};
      const updatedProduct = req.body;
      const product = {
        $set: {
          name: updatedProduct.name,
          brandname: updatedProduct.brandname,
          category: updatedProduct.category,
          price: updatedProduct.price,
          shortdescription: updatedProduct.shortdescription,
          rating: updatedProduct.rating,
          photo: updatedProduct.photo
        }
      }

      const result = await GoogleTabletCollection.updateOne(filter, product, options);
      res.send(result);
    })
    
    app.post('/tablet/googlet', async (req, res) => {
      const products = req.body;
      const result = await GoogleTabletCollection.insertOne(products);
      res.send(result);
    })

    app.delete('/tablet/googlet/:id', async (req, res) => {
      const id = req.params.id;
      const query = {_id: new ObjectId(id)}
      const result = await GoogleTabletCollection.deleteOne(query);
      res.send(result);
    })

    // google pixel

    app.get('/tablet/samsungt', async (req, res) => {
      const cursor = SamsungTabletCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    })

    app.get('/tablet/samsungt/:id', async (req, res) => {
      const id = req.params.id;
      const query = {_id: new ObjectId(id)}
      const result = await SamsungTabletCollection.findOne(query);
      res.send(result);
    })

    app.put('/tablet/samsungt/:id', async (req, res) => {
      const id = req.params.id;
      const filter = {_id: new ObjectId(id)}
      const options = {upsert: true};
      const updatedProduct = req.body;
      const product = {
        $set: {
          name: updatedProduct.name,
          brandname: updatedProduct.brandname,
          category: updatedProduct.category,
          price: updatedProduct.price,
          shortdescription: updatedProduct.shortdescription,
          rating: updatedProduct.rating,
          photo: updatedProduct.photo
        }
      }

      const result = await SamsungTabletCollection.updateOne(filter, product, options);
      res.send(result);
    })
    
    app.post('/tablet/samsungt', async (req, res) => {
      const products = req.body;
      const result = await SamsungTabletCollection.insertOne(products);
      res.send(result);
    })

    app.delete('/tablet/samsungt/:id', async (req, res) => {
      const id = req.params.id;
      const query = {_id: new ObjectId(id)}
      const result = await SamsungTabletCollection.deleteOne(query);
      res.send(result);
    })

    //Xiaomi

    app.get('/tablet/xiaomit', async (req, res) => {
      const cursor = XiaomiTabletCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    })

    app.get('/tablet/xiaomit/:id', async (req, res) => {
      const id = req.params.id;
      const query = {_id: new ObjectId(id)}
      const result = await XiaomiTabletCollection.findOne(query);
      res.send(result);
    })

    app.put('/tablet/xiaomit/:id', async (req, res) => {
      const id = req.params.id;
      const filter = {_id: new ObjectId(id)}
      const options = {upsert: true};
      const updatedProduct = req.body;
      const product = {
        $set: {
          name: updatedProduct.name,
          brandname: updatedProduct.brandname,
          category: updatedProduct.category,
          price: updatedProduct.price,
          shortdescription: updatedProduct.shortdescription,
          rating: updatedProduct.rating,
          photo: updatedProduct.photo
        }
      }

      const result = await XiaomiTabletCollection.updateOne(filter, product, options);
      res.send(result);
    })
    
    app.post('/tablet/xiaomit', async (req, res) => {
      const products = req.body;
      const result = await XiaomiTabletCollection.insertOne(products);
      res.send(result);
    })

    app.delete('/tablet/xiaomit/:id', async (req, res) => {
      const id = req.params.id;
      const query = {_id: new ObjectId(id)}
      const result = await XiaomiTabletCollection.deleteOne(query);
      res.send(result);
    })

    //Realme
    
    app.get('/tablet/lenovot', async (req, res) => {
      const cursor = LenovoTabletCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    })

    app.get('/tablet/lenovot/:id', async (req, res) => {
      const id = req.params.id;
      const query = {_id: new ObjectId(id)}
      const result = await LenovoTabletCollection.findOne(query);
      res.send(result);
    })

    app.put('/tablet/lenovot/:id', async (req, res) => {
      const id = req.params.id;
      const filter = {_id: new ObjectId(id)}
      const options = {upsert: true};
      const updatedProduct = req.body;
      const product = {
        $set: {
          name: updatedProduct.name,
          brandname: updatedProduct.brandname,
          category: updatedProduct.category,
          price: updatedProduct.price,
          shortdescription: updatedProduct.shortdescription,
          rating: updatedProduct.rating,
          photo: updatedProduct.photo
        }
      }

      const result = await LenovoTabletCollection.updateOne(filter, product, options);
      res.send(result);
    })
    
    app.post('/tablet/lenovot', async (req, res) => {
      const products = req.body;
      const result = await LenovoTabletCollection.insertOne(products);
      res.send(result);
    })

    app.delete('/tablet/lenovot/:id', async (req, res) => {
      const id = req.params.id;
      const query = {_id: new ObjectId(id)}
      const result = await LenovoTabletCollection.deleteOne(query);
      res.send(result);
    })



    // Headphones


    app.get('/headphones/fentechH', async (req, res) => {
      const cursor = FantechheadphonesCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    })

    app.get('/headphones/fentechH/:id', async (req, res) => {
      const id = req.params.id;
      const query = {_id: new ObjectId(id)}
      const result = await FantechheadphonesCollection.findOne(query);
      res.send(result);
    })

    app.put('/headphones/fentechH/:id', async (req, res) => {
      const id = req.params.id;
      const filter = {_id: new ObjectId(id)}
      const options = {upsert: true};
      const updatedProduct = req.body;
      const product = {
        $set: {
          name: updatedProduct.name,
          brandname: updatedProduct.brandname,
          category: updatedProduct.category,
          price: updatedProduct.price,
          shortdescription: updatedProduct.shortdescription,
          rating: updatedProduct.rating,
          photo: updatedProduct.photo
        }
      }

      const result = await FantechheadphonesCollection.updateOne(filter, product, options);
      res.send(result);
    })

    app.post('/headphones/fentechH', async (req, res) => {
      const products = req.body;
      const result = await FantechheadphonesCollection.insertOne(products);
      res.send(result)
    })

    app.delete('/headphones/fentechH/:id', async (req, res) => {
      const id = req.params.id;
      const query = {_id: new ObjectId(id)}
      const result = await FantechheadphonesCollection.deleteOne(query);
      res.send(result);
    })

    // samsung

    app.get('/headphones/havitH', async (req, res) => {
      const cursor = HavitheadphonesCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    })

    app.get('/headphones/havitH/:id', async (req, res) => {
      const id = req.params.id;
      const query = {_id: new ObjectId(id)}
      const result = await HavitheadphonesCollection.findOne(query);
      res.send(result);
    })


    app.put('/headphones/havitH/:id', async (req, res) => {
      const id = req.params.id;
      const filter = {_id: new ObjectId(id)}
      const options = {upsert: true};
      const updatedProduct = req.body;
      const product = {
        $set: {
          name: updatedProduct.name,
          brandname: updatedProduct.brandname,
          category: updatedProduct.category,
          price: updatedProduct.price,
          shortdescription: updatedProduct.shortdescription,
          rating: updatedProduct.rating,
          photo: updatedProduct.photo
        }
      }

      const result = await HavitheadphonesCollection.updateOne(filter, product, options);
      res.send(result);
    })
    
    app.post('/headphones/havitH', async (req, res) => {
      const products = req.body;
      const result = await HavitheadphonesCollection.insertOne(products);
      res.send(result);
    })

    app.delete('/headphones/havitH/:id', async (req, res) => {
      const id = req.params.id;
      const query = {_id: new ObjectId(id)}
      const result = await HavitheadphonesCollection.deleteOne(query);
      res.send(result);
    })

    // google pixel

    app.get('/headphones/bossH', async (req, res) => {
      const cursor = BoseheadphonesCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    })

    app.get('/headphones/bossH/:id', async (req, res) => {
      const id = req.params.id;
      const query = {_id: new ObjectId(id)}
      const result = await BoseheadphonesCollection.findOne(query);
      res.send(result);
    })

    app.put('/headphones/bossH/:id', async (req, res) => {
      const id = req.params.id;
      const filter = {_id: new ObjectId(id)}
      const options = {upsert: true};
      const updatedProduct = req.body;
      const product = {
        $set: {
          name: updatedProduct.name,
          brandname: updatedProduct.brandname,
          category: updatedProduct.category,
          price: updatedProduct.price,
          shortdescription: updatedProduct.shortdescription,
          rating: updatedProduct.rating,
          photo: updatedProduct.photo
        }
      }

      const result = await BoseheadphonesCollection.updateOne(filter, product, options);
      res.send(result);
    })
    
    app.post('/headphones/bossH', async (req, res) => {
      const products = req.body;
      const result = await BoseheadphonesCollection.insertOne(products);
      res.send(result);
    })

    app.delete('/headphones/bossH/:id', async (req, res) => {
      const id = req.params.id;
      const query = {_id: new ObjectId(id)}
      const result = await BoseheadphonesCollection.deleteOne(query);
      res.send(result);
    })

    //Xiaomi

    app.get('/headphones/gamdiasH', async (req, res) => {
      const cursor = GamdiasheadphonesCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    })

    app.get('/headphones/gamdiasH/:id', async (req, res) => {
      const id = req.params.id;
      const query = {_id: new ObjectId(id)}
      const result = await GamdiasheadphonesCollection.findOne(query);
      res.send(result);
    })

    app.put('/headphones/gamdiasH/:id', async (req, res) => {
      const id = req.params.id;
      const filter = {_id: new ObjectId(id)}
      const options = {upsert: true};
      const updatedProduct = req.body;
      const product = {
        $set: {
          name: updatedProduct.name,
          brandname: updatedProduct.brandname,
          category: updatedProduct.category,
          price: updatedProduct.price,
          shortdescription: updatedProduct.shortdescription,
          rating: updatedProduct.rating,
          photo: updatedProduct.photo
        }
      }

      const result = await GamdiasheadphonesCollection.updateOne(filter, product, options);
      res.send(result);
    })
    
    app.post('/headphones/gamdiasH', async (req, res) => {
      const products = req.body;
      const result = await GamdiasheadphonesCollection.insertOne(products);
      res.send(result);
    })

    app.delete('/headphones/gamdiasH/:id', async (req, res) => {
      const id = req.params.id;
      const query = {_id: new ObjectId(id)}
      const result = await GamdiasheadphonesCollection.deleteOne(query);
      res.send(result);
    })

    //Realme
    
    app.get('/headphones/razerH', async (req, res) => {
      const cursor = RazerheadphonesCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    })

    app.get('/headphones/razerH/:id', async (req, res) => {
      const id = req.params.id;
      const query = {_id: new ObjectId(id)}
      const result = await RazerheadphonesCollection.findOne(query);
      res.send(result);
    })

    app.put('/headphones/razerH/:id', async (req, res) => {
      const id = req.params.id;
      const filter = {_id: new ObjectId(id)}
      const options = {upsert: true};
      const updatedProduct = req.body;
      const product = {
        $set: {
          name: updatedProduct.name,
          brandname: updatedProduct.brandname,
          category: updatedProduct.category,
          price: updatedProduct.price,
          shortdescription: updatedProduct.shortdescription,
          rating: updatedProduct.rating,
          photo: updatedProduct.photo
        }
      }

      const result = await RazerheadphonesCollection.updateOne(filter, product, options);
      res.send(result);
    })
    
    app.post('/headphones/razerH', async (req, res) => {
      const products = req.body;
      const result = await RazerheadphonesCollection.insertOne(products);
      res.send(result);
    })

    app.delete('/headphones/razerH/:id', async (req, res) => {
      const id = req.params.id;
      const query = {_id: new ObjectId(id)}
      const result = await RazerheadphonesCollection.deleteOne(query);
      res.send(result);
    })

    
    // Laptop


    app.get('/laptop/razerL', async (req, res) => {
      const cursor = RazerLaptopCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    })

    app.get('/laptop/razerL/:id', async (req, res) => {
      const id = req.params.id;
      const query = {_id: new ObjectId(id)}
      const result = await RazerLaptopCollection.findOne(query);
      res.send(result);
    })

    app.put('/laptop/razerL/:id', async (req, res) => {
      const id = req.params.id;
      const filter = {_id: new ObjectId(id)}
      const options = {upsert: true};
      const updatedProduct = req.body;
      const product = {
        $set: {
          name: updatedProduct.name,
          brandname: updatedProduct.brandname,
          category: updatedProduct.category,
          price: updatedProduct.price,
          shortdescription: updatedProduct.shortdescription,
          rating: updatedProduct.rating,
          photo: updatedProduct.photo
        }
      }

      const result = await RazerLaptopCollection.updateOne(filter, product, options);
      res.send(result);
    })

    app.post('/laptop/razerL', async (req, res) => {
      const products = req.body;
      const result = await RazerLaptopCollection.insertOne(products);
      res.send(result)
    })

    app.delete('/laptop/razerL/:id', async (req, res) => {
      const id = req.params.id;
      const query = {_id: new ObjectId(id)}
      const result = await RazerLaptopCollection.deleteOne(query);
      res.send(result);
    })

    // samsung

    app.get('/laptop/appleL', async (req, res) => {
      const cursor = AppleLaptopCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    })

    app.get('/laptop/appleL/:id', async (req, res) => {
      const id = req.params.id;
      const query = {_id: new ObjectId(id)}
      const result = await AppleLaptopCollection.findOne(query);
      res.send(result);
    })


    app.put('/laptop/appleL/:id', async (req, res) => {
      const id = req.params.id;
      const filter = {_id: new ObjectId(id)}
      const options = {upsert: true};
      const updatedProduct = req.body;
      const product = {
        $set: {
          name: updatedProduct.name,
          brandname: updatedProduct.brandname,
          category: updatedProduct.category,
          price: updatedProduct.price,
          shortdescription: updatedProduct.shortdescription,
          rating: updatedProduct.rating,
          photo: updatedProduct.photo
        }
      }

      const result = await AppleLaptopCollection.updateOne(filter, product, options);
      res.send(result);
    })
    
    app.post('/laptop/appleL', async (req, res) => {
      const products = req.body;
      const result = await AppleLaptopCollection.insertOne(products);
      res.send(result);
    })

    app.delete('/laptop/appleL/:id', async (req, res) => {
      const id = req.params.id;
      const query = {_id: new ObjectId(id)}
      const result = await AppleLaptopCollection.deleteOne(query);
      res.send(result);
    })

    // google pixel

    app.get('/laptop/hpL', async (req, res) => {
      const cursor = HpLaptopCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    })

    app.get('/laptop/hpL/:id', async (req, res) => {
      const id = req.params.id;
      const query = {_id: new ObjectId(id)}
      const result = await HpLaptopCollection.findOne(query);
      res.send(result);
    })

    app.put('/laptop/hpL/:id', async (req, res) => {
      const id = req.params.id;
      const filter = {_id: new ObjectId(id)}
      const options = {upsert: true};
      const updatedProduct = req.body;
      const product = {
        $set: {
          name: updatedProduct.name,
          brandname: updatedProduct.brandname,
          category: updatedProduct.category,
          price: updatedProduct.price,
          shortdescription: updatedProduct.shortdescription,
          rating: updatedProduct.rating,
          photo: updatedProduct.photo
        }
      }

      const result = await HpLaptopCollection.updateOne(filter, product, options);
      res.send(result);
    })
    
    app.post('/laptop/hpL', async (req, res) => {
      const products = req.body;
      const result = await HpLaptopCollection.insertOne(products);
      res.send(result);
    })

    app.delete('/laptop/hpL/:id', async (req, res) => {
      const id = req.params.id;
      const query = {_id: new ObjectId(id)}
      const result = await HpLaptopCollection.deleteOne(query);
      res.send(result);
    })

    //Xiaomi

    app.get('/laptop/dellL', async (req, res) => {
      const cursor = DellLaptopCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    })

    app.get('/laptop/dellL/:id', async (req, res) => {
      const id = req.params.id;
      const query = {_id: new ObjectId(id)}
      const result = await DellLaptopCollection.findOne(query);
      res.send(result);
    })

    app.put('/laptop/dellL/:id', async (req, res) => {
      const id = req.params.id;
      const filter = {_id: new ObjectId(id)}
      const options = {upsert: true};
      const updatedProduct = req.body;
      const product = {
        $set: {
          name: updatedProduct.name,
          brandname: updatedProduct.brandname,
          category: updatedProduct.category,
          price: updatedProduct.price,
          shortdescription: updatedProduct.shortdescription,
          rating: updatedProduct.rating,
          photo: updatedProduct.photo
        }
      }

      const result = await DellLaptopCollection.updateOne(filter, product, options);
      res.send(result);
    })
    
    app.post('/laptop/dellL', async (req, res) => {
      const products = req.body;
      const result = await DellLaptopCollection.insertOne(products);
      res.send(result);
    })

    app.delete('/laptop/dellL/:id', async (req, res) => {
      const id = req.params.id;
      const query = {_id: new ObjectId(id)}
      const result = await DellLaptopCollection.deleteOne(query);
      res.send(result);
    })

    //Realme
    
    app.get('/laptop/asusL', async (req, res) => {
      const cursor = AsusLaptopCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    })

    app.get('/laptop/asusL/:id', async (req, res) => {
      const id = req.params.id;
      const query = {_id: new ObjectId(id)}
      const result = await AsusLaptopCollection.findOne(query);
      res.send(result);
    })

    app.put('/laptop/asusL/:id', async (req, res) => {
      const id = req.params.id;
      const filter = {_id: new ObjectId(id)}
      const options = {upsert: true};
      const updatedProduct = req.body;
      const product = {
        $set: {
          name: updatedProduct.name,
          brandname: updatedProduct.brandname,
          category: updatedProduct.category,
          price: updatedProduct.price,
          shortdescription: updatedProduct.shortdescription,
          rating: updatedProduct.rating,
          photo: updatedProduct.photo
        }
      }

      const result = await AsusLaptopCollection.updateOne(filter, product, options);
      res.send(result);
    })
    
    app.post('/laptop/asusL', async (req, res) => {
      const products = req.body;
      const result = await AsusLaptopCollection.insertOne(products);
      res.send(result);
    })

    app.delete('/laptop/asusL/:id', async (req, res) => {
      const id = req.params.id;
      const query = {_id: new ObjectId(id)}
      const result = await AsusLaptopCollection.deleteOne(query);
      res.send(result);
    })


    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);



app.get('/', (req, res) => {
    res.send('Server Running')
})

app.listen(port, () => [
    console.log(`server started, ${port}`)
])

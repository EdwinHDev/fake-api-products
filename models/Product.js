import pkg from 'mongoose';
const { Schema, model, models } = pkg;

const productSchema = new Schema({
  category: {
    type: String,
    require: [true, "La categoría es requerida."]
  },
  characteristics: [
    {
      name: {
        type: String,
      },
      value: {
        type: String,
      }
    }
  ],
  condition: {
    type: String,
    require: [true, "La condición es requerida."],
    enum: {
      values: ["nuevo", "como nuevo", "usado"],
      message: '{VALUE} no es un valor valido',
    },
  },
  description: {
    type: String,
    require: [true, "La description es requerida."]
  },
  freeShipping: {
    type: Boolean,
    default: false
  },
  images: [
    {
      type: String,
      require: [true, "Las imagenes son requeridas."]
    },
  ],
  name: {
    type: String,
    require: [true, "El nombre es requerido."]
  },
  price: {
    type: Number,
    require: [true, "El precio es requerido."]
  },
  stock: {
    type: Number,
    require: [true, "El stock es requerido."]
  },
  subCategories: {
    type: String,
    require: [true, "La sub-categoría es requerida."]
  },
  companyName: {
    type: String,
    require: [true, "El nombre de la empresa es requerido."]
  },
  discount: {
    type: Number,
    require: [true, "El descuento es requerido."]
  },
  rating: {
    star_1: [
      {
        client: {
          client_id: {
            type: String
          },
          name: {
            type: String
          }
        },
        conment: {
          type: String
        },
        date: {
          type: String
        },
      }
    ],
    star_2: [
      {
        client: {
          client_id: {
            type: String
          },
          name: {
            type: String
          }
        },
        conment: {
          type: String
        },
        date: {
          type: String
        },
      }
    ],
    star_3: [
      {
        client: {
          client_id: {
            type: String
          },
          name: {
            type: String
          }
        },
        conment: {
          type: String
        },
        date: {
          type: String
        },
      }
    ],
    star_4: [
      {
        client: {
          client_id: {
            type: String
          },
          name: {
            type: String
          }
        },
        conment: {
          type: String
        },
        date: {
          type: String
        },
      }
    ],
    star_5: [
      {
        client: {
          client_id: {
            type: String
          },
          name: {
            type: String
          }
        },
        conment: {
          type: String
        },
        date: {
          type: String
        },
      }
    ],
  },
  status: {
    type: String,
    require: [true, "El estatus es requerido."],
    enum: {
      values: ["publicado", "no publicado", "bloqueado"],
      message: '{VALUE} no es un valor valido',
    },
  },
},
  {
    timestamps: true
  }
);

const Product = models.Product || model("Product", productSchema);

export default Product;
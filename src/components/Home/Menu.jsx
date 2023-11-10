"use client"
import Image from "next/image"
import breackFast1 from "../../../public/image/ensaio/menu/breakfest/1.jpg"
import breackFast2 from "../../../public/image/ensaio/menu/breakfest/2.jpg"
import breackFast3 from "../../../public/image/ensaio/menu/breakfest/3.jpg"
import breackFast4 from "../../../public/image/ensaio/menu/breakfest/4.jpg"
import breackFast5 from "../../../public/image/ensaio/menu/breakfest/5.jpg"
import desert1 from "../../../public/image/ensaio/menu/dessert/1.jpg"
import desert2 from "../../../public/image/ensaio/menu/dessert/2.jpg"
import desert3 from "../../../public/image/ensaio/menu/dessert/3.jpg"
import desert4 from "../../../public/image/ensaio/menu/dessert/4.jpg"
import desert5 from "../../../public/image/ensaio/menu/dessert/5.jpg"
import drink1 from "../../../public/image/ensaio/menu/drinks/1.jpg"
import drink2 from "../../../public/image/ensaio/menu/drinks/2.jpg"
import drink3 from "../../../public/image/ensaio/menu/drinks/3.jpg"
import drink4 from "../../../public/image/ensaio/menu/drinks/4.jpg"
import drink5 from "../../../public/image/ensaio/menu/drinks/5.jpg"
import lanch1 from "../../../public/image/ensaio/menu/lunch/1.jpg"
import lanch2 from "../../../public/image/ensaio/menu/lunch/2.jpg"
import lanch3 from "../../../public/image/ensaio/menu/lunch/3.jpg"
import lanch4 from "../../../public/image/ensaio/menu/lunch/4.jpg"
import lanch5 from "../../../public/image/ensaio/menu/lunch/5.jpg"




import React, {useState} from "react"
export default function Menu(){
    const [breackFast, setBreackFast] = useState(true)
    const [lunch, setLunch] = useState(false)
    const [dessert , setDessert ] = useState(false)
    const [drinks, setDrinks] = useState(false)

    
    const handlebreackFast = () =>{
        setBreackFast(true)
        setLunch(false) 
        setDessert (false)
        setDrinks(false)
    }

    const handlelunch = () =>{
        setLunch(true)
        setBreackFast(false)
        setDessert (false)
        setDrinks(false)

    }
    const handledessert = () =>{
        setDessert (true)
        setBreackFast(false)
        setLunch(false)
        setDrinks(false)
        

    }
    const handledrinks = () =>{
        setDrinks(true)
        setDessert (false)
        setBreackFast(false)
        setLunch(false)
        

    }

    return(
        <section id="menu"  className="spacer-double-lg" style={{paddingTop: "0"}}>
        <div className="container">
           <div className="row justify-content-center">
              <div className="col">
                 <div className="mb-5 pb-5 text-center">
                    <span className="label-title mb-3">Nosso Menu</span>
                    <h1 className="h2 font-alt">Resort Menu</h1>
                    <p className="w-md-40 mb-0 mx-auto lead">The time has come to bring those ideas and plans to life. This is where we really begin to visualize.</p>
                 </div>
              </div>
           </div>
        </div>
        <div className="container">
           <div className="row">
              <div className="col d-flex justify-content-center">
                 <ul className=" mb-5 pb-5 nav nav-menu-tabs" role="tablist">
                    <li className=" letter-spacing-medium" style={{margin: "0 0.8rem", color: "#a29260", fontWeight: "900", cursor: "pointer"}} onClick={handlebreackFast}>Pequeno Almoço</li>
                    <li className=" letter-spacing-medium" style={{margin: "0 0.8rem", color: "#a29260", fontWeight: "900", cursor: "pointer"}} onClick={handlelunch}>Lanches</li>
                    <li className=" letter-spacing-medium" style={{margin: "0 0.8rem", color: "#a29260", fontWeight: "900", cursor: "pointer"}} onClick={handledessert }>Dessert</li>
                    <li className=" letter-spacing-medium" style={{margin: "0 0.8rem", color: "#a29260", fontWeight: "900", cursor: "pointer"}} onClick={handledrinks}>Bebidas</li>
                 </ul>
              </div>
           </div>
        </div>
        <div className="menuZao" >
           <div className="row justify-content-around align-items-center">
              <div className="col-md-8 col-lg-7 ">
                 <div className="tab-content">
                    {breackFast == true ? 
                    <div className="tab-pane">
                       <div className="media align-items-center mb-4 ">
                          <Image className="avatar-sm rounded-circle mr-3" src={breackFast1} alt=""/>
                          <div className="media-body position-relative">
                             <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span className="bg-white">Waffle Brunch  </span></h6>
                             <span className="dots-price"></span>
                             <span className="menu-price mb-0 h6">3.00Mt</span>
                             <p className="mb-0 font-size-14">French Toast / Bacon / Strawberries</p>
                          </div>
                       </div>
                       <div className="media align-items-center mb-4 ">
                          <Image className="avatar-sm rounded-circle mr-3" src={breackFast2} alt=""/>
                          <div className="media-body position-relative">
                             <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span className="bg-white">Farmhouse Omelette </span></h6>
                             <span className="dots-price"></span>
                             <span className="menu-price  mb-0 h6">4.30Mt</span>
                             <p className="mb-0 font-size-14">Sauteed Potatoes / Bacon / Grilled Onions</p>
                          </div>
                       </div>
                       <div className="media align-items-center mb-4 ">
                          <Image className="avatar-sm rounded-circle mr-3" src={breackFast3} alt=""/>
                          <div className="media-body position-relative">
                             <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span className="bg-white">Chef's Omelette </span></h6>
                             <span className="dots-price"></span>
                             <span className="menu-price mb-0 h6">5.50Mt</span>
                             <p className="mb-0 font-size-14">Avocado / Mushrooms / Green Onion / Tomato</p>
                          </div>
                       </div>
                       <div className="media align-items-center mb-4 ">
                          <Image className="avatar-sm rounded-circle mr-3" src={breackFast4} alt=""/>
                          <div className="media-body position-relative">
                             <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span className="bg-white">Waffles Benedict </span></h6>
                             <span className="dots-price"></span>
                             <span className="menu-price mb-0 h6">4.00Mt</span>
                             <p className="mb-0 font-size-14">Strawberries / Pecans / Chantilly Cream</p>
                          </div>
                       </div>
                       <div className="media align-items-center ">
                          <Image className="avatar-sm rounded-circle mr-3" src={breackFast5} alt=""/>
                          <div className="media-body position-relative">
                             <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span className="bg-white">Belgian Waffle </span></h6>
                             <span className="dots-price"></span>
                             <span className="menu-price  mb-0 h6">15.50Mt</span>
                             <p className="mb-0 font-size-14">Maple Butter / Syrup</p>
                          </div>
                       </div>
                    </div>
                    :null
                    }
                    {lunch == true ? 
                    <div className="tab-pane">
                       <div className="media align-items-center mb-4 ">
                          <Image className="avatar-sm rounded-circle mr-3" src={lanch1} alt=""/>
                          <div className="media-body position-relative">
                             <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span className="bg-white">Crabcakes   </span></h6>
                             <span className="dots-price"></span>
                             <span className="menu-price mb-0 h6">12.50Mt</span>
                             <p className="mb-0 font-size-14">Mustard / Tartar Sauce.</p>
                          </div>
                       </div>
                       <div className="media align-items-center mb-4 ">
                          <Image className="avatar-sm rounded-circle mr-3" src={lanch2} alt=""/>
                          <div className="media-body position-relative">
                             <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span className="bg-white">Buffalo Wings  </span></h6>
                             <span className="dots-price"></span>
                             <span className="menu-price  mb-0 h6">19.00Mt</span>
                             <p className="mb-0 font-size-14">Hot Sauce / Blue Cheese Dressing</p>
                          </div>
                       </div>
                       <div className="media align-items-center mb-4 ">
                          <Image className="avatar-sm rounded-circle mr-3" src={lanch3} alt=""/>
                          <div className="media-body position-relative">
                             <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span className="bg-white">Quesadilla Pizza  </span></h6>
                             <span className="dots-price"></span>
                             <span className="menu-price  mb-0 h6">14.50Mt</span>
                             <p className="mb-0 font-size-14">Melted Cheese / Green Onions</p>
                          </div>
                       </div>
                       <div className="media align-items-center mb-4 ">
                          <Image className="avatar-sm rounded-circle mr-3" src={lanch4} alt=""/>
                          <div className="media-body position-relative">
                             <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span className="bg-white">Lunch Salmon  </span></h6>
                             <span className="dots-price"></span>
                             <span className="menu-price  mb-0 h6">18.50Mt</span>
                             <p className="mb-0 font-size-14">Herb Crusted /  Filet of Salmon / Miso Salmon</p>
                          </div>
                       </div>
                       <div className="media align-items-center ">
                          <Image className="avatar-sm rounded-circle mr-3" src={lanch5} alt=""/>
                          <div className="media-body position-relative">
                             <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span className="bg-white">Tex Mex Eggrolls  </span></h6>
                             <span className="dots-price"></span>
                             <span className="menu-price  mb-0 h6">14.00Mt</span>
                             <p className="mb-0 font-size-14">Corn / Black Beans / Peppers / Onions and Melted</p>
                          </div>
                       </div>
                    </div>
                    :null
                    }
                    {dessert == true ?
                    <div className="tab-pane" >
                       <div className="media align-items-center mb-4 ">
                          <Image className="avatar-sm rounded-circle mr-3" src={desert1} alt=""/>
                          <div className="media-body position-relative">
                             <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span className="bg-white">Original Cheesecake   </span></h6>
                             <span className="dots-price"></span>
                             <span className="menu-price  mb-0 h6">12.50Mt</span>
                             <p className="mb-0 font-size-14">Creamy Cheesecake / Graham Cracker Crust</p>
                          </div>
                       </div>
                       <div className="media align-items-center mb-4 ">
                          <Image className="avatar-sm rounded-circle mr-3" src={desert2} alt=""/>
                          <div className="media-body position-relative">
                             <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span className="bg-white">Carrot Cake   </span></h6>
                             <span className="dots-price"></span>
                             <span className="menu-price  mb-0 h6">11.00Mt</span>
                             <p className="mb-0 font-size-14">Moist Layers of Carrot Cake / Our Famous Cream.</p>
                          </div>
                       </div>
                       <div className="media align-items-center mb-4 ">
                          <Image className="avatar-sm rounded-circle mr-3" src={desert3} alt=""/>
                          <div className="media-body position-relative">
                             <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span className="bg-white">Black-Out Cake   </span></h6>
                             <span className="dots-price"></span>
                             <span className="menu-price  mb-0 h6">14.50Mt</span>
                             <p className="mb-0 font-size-14">Deepest / Richest Chocolate Cake / Chocolate Chips</p>
                          </div>
                       </div>
                       <div className="media align-items-center mb-4 ">
                          <Image className="avatar-sm rounded-circle mr-3" src={desert4} alt=""/>
                          <div className="media-body position-relative">
                             <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span className="bg-white">Low Carb Cheesecake  </span></h6>
                             <span className="dots-price"></span>
                             <span className="menu-price  mb-0 h6">18.50Mt</span>
                             <p className="mb-0 font-size-14">Smooth / Creamy / Walnut Crust Sweetened with Stevia</p>
                          </div>
                       </div>
                       <div className="media align-items-center ">
                          <Image className="avatar-sm rounded-circle mr-3" src={desert5} alt=""/>
                          <div className="media-body position-relative">
                             <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span className="bg-white">Hot Fudge Sundae   </span></h6>
                             <span className="dots-price"></span>
                             <span className="menu-price  mb-0 h6">14.50Mt</span>
                             <p className="mb-0 font-size-14">Whipped Cream / Almonds</p>
                          </div>
                       </div>
                    </div>
                    :null
                    }
                    {drinks == true ?
                    <div className="tab-pane" >
                       <div className="media align-items-center mb-4 ">
                          <Image className="avatar-sm rounded-circle mr-3" src={drink1} alt=""/>
                          <div className="media-body position-relative">
                             <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span className="bg-white">Fruit Smoothie</span></h6>
                             <span className="dots-price"></span>
                             <span className="menu-price  mb-0 h6">5.00Mt</span>
                             <p className="mb-0 font-size-14">Strawberries / Orange / Pineapple /  Banana</p>
                          </div>
                       </div>
                       <div className="media align-items-center mb-4 ">
                          <Image className="avatar-sm rounded-circle mr-3" src={drink2} alt=""/>
                          <div className="media-body position-relative">
                             <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span className="bg-white">Tropical Smoothie   </span></h6>
                             <span className="dots-price"></span>
                             <span className="menu-price  mb-0 h6">7.50Mt</span>
                             <p className="mb-0 font-size-14">Mango / Passion Fruit / Pineapple / Coconut</p>
                          </div>
                       </div>
                       <div className="media align-items-center mb-4 ">
                          <Image className="avatar-sm rounded-circle mr-3" src={drink3} alt=""/>
                          <div className="media-body position-relative">
                             <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span className="bg-white">Café Latte    </span></h6>
                             <span className="dots-price"></span>
                             <span className="menu-price  mb-0 h6">11.00Mt</span>
                             <p className="mb-0 font-size-14">Double Espresso / Extra Steamed Milk</p>
                          </div>
                       </div>
                       <div className="media align-items-center mb-4 ">
                          <Image className="avatar-sm rounded-circle mr-3" src={drink4} alt=""/>
                          <div className="media-body position-relative">
                             <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span className="bg-white">Café Mocha   </span></h6>
                             <span className="dots-price"></span>
                             <span className="menu-price  mb-0 h6">7.50Mt</span>
                             <p className="mb-0 font-size-14">Espresso / Chocolate / Steamed Milk</p>
                          </div>
                       </div>
                       <div className="media align-items-center ">
                          <Image className="avatar-sm rounded-circle mr-3" src={drink5} alt=""/>
                          <div className="media-body position-relative">
                             <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span className="bg-white">Hot Fudge Sundae   </span></h6>
                             <span className="dots-price"></span>
                             <span className="menu-price  mb-0 h6">15.9Mt</span>
                             <p className="mb-0 font-size-14">Whipped Cream / Almonds</p>
                          </div>
                       </div>
                    </div>
                    :null
                    }
                 </div>
              </div>
           </div>
        </div>
     </section>
    )
}
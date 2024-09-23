import MenuItem from "./components/MenuItem"
import OrderContents from "./components/OrderContents"
import OrdenTotal from "./components/OrdenTotal"
import TipPercentageForm from "./components/TipPercentageForm"
import { menuItems } from "./data/db"
import useOrder from "./hooks/useOrder"


function App() {

  const {order, tip, setTip, addItem, removeItem, placeOrder} = useOrder()

  return (
    <>
      <header className="bg-teal-400 py-5">
        <h1 className="text-center text-4xl font-black">Calculadora de propias y consumo</h1>
      </header>

      <main className="max-w-5xl mx-auto py-20 grid md:grid-cols-2">
        <div className="p-5">
          <h2 className="text-4xl font-black">Menú</h2>
            <div className="space-y-3 mt-7">
              {menuItems.map(item=>(
                <MenuItem
                  key={item.id}
                  item={item}
                  addItem={addItem}
                />
              ))}
            </div>
        </div>

        <div className="border border-solid border-slate-300 p-5 rounded-lg space-y-10">
              {order.length > 0 ? (
                <>
                  <OrderContents
                  order={order}
                  removeItem={removeItem}
                  />

                  <TipPercentageForm
                  setTip={setTip}
                  tip={tip}
                  />

                  <OrdenTotal
                  order={order}
                  tip={tip}
                  placeOrder={placeOrder}
                  />
                </>
              ) : (
              <p className="text-center">La orden está vacía</p> 
              )} 
              
        </div>
        
      </main>
    </>
  )
}

export default App

import './App.css';
import { Header } from './components/Header';
import { Main } from './components/Main';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Selected } from './components/Selected';

function App() {

  const samples=[
    {
    id:0,
    name:"sample 1",
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdeLphyZZjXWQVt6sX54dU9oynrhj00vQtjA&usqp=CAU"
    },
    {
    id:1,
    name:"sample 2",
    img:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQIAAADDCAMAAABeUu/HAAAA9lBMVEX////+AAD6AAD3AAD6vb3blZXrAADxAAD7zc74xMX/4eH1r67wR0b/AADtPT7oAADhAADcAADzy8r+AAjoXV3/9fb2BAX58/L12NjpoJ314eL43uHxxsbpLjP3O0L8AAzlP0DnY2X2m5XpFh/yoqDmIi362NnxpqnsmJv6d3HuSknsLiv0R0flOTnxICLhQ0LfZmvrTlD16OjfERXhNj/ko6XmtLTrf4Lmc3HigYjgIx/iMTHmY23aREfnjpDiZ2XjhILtV2DkrKbrRlDXLzD2w8vdWlrtw7zydnjtWFXqp6HsYmnmZl3TFyfjdW/UiorOAADZo6OOFTUVAAAIu0lEQVR4nO2dC1fayhbH50FnoHSYCSEBA1QsghypxxqqWKlAXx6959z2nO//Zc4eHkoAtetebDDZv7ZrdRqoM3/2a4asbEIQBEEQBEEQBEGi5DKppTaToM54WqnPJHjNaDrZpYWZBIVHXjlRiFPOqHIZZcnBpY25BOoxuRgsH9Yupe8q37fv3sinED8/LYFdMayfuzZoUF8mBSHrPysBt3awF7yRzew+b7VfJofgZySw18AITIccyBLpSPZbPjHs5zM/I4Fv4x9vVslId0jJOWwUXm0fx4Xu4eGrt4XCoR0dFmCOb18dzq82Dl91G0eNt9OZH8KV5mGhUfj9+FX93eMSMKsAlSckNDob9kRx43XZdvCABDYJKvmC5MT7csYMynFP9X5OIyPvLDKsRD+6YkCWeNARGHWKpO+ck7748AQz3xQl8W5xeCEPFkahke2FYU3rcOntDzkCYyXiNXTeO3LOyPbyDuLV6Hbk1TmTw9thxVC+4MI5walZ0uAeCVyf7TLZIUXTrBZ1a8V4togRc13Grmej8sB+eLd20DZ2NbcaZIS9qtuR/+AeCXwIBPDGU7FHDsTI+1XL+R/4KKF6d6k8n4zKDQ7VLKdyZzKsGIhnUNnoqQY1YStdypoRO1grgZJU8UtC9sypdwNVwRazxyh3YfuiuNXAqzPIYwpEEFaDqqOUzWpMTewgJ5ktc+C3WDTr9VbgKnAnyIPZoOdsdS58ZxVwJfN96kM8aEEVDwUtFPJUnpKqngQ0a9TWpItSsWmMg2pvQYP1VmAtJ2/ek7y+iW95P8MHuyzuw6qV6BPyhVM22dcxqs8gGShQAOwAIpuukIqe2QDEjtZCil+RYOIshx7p6z45F8P7f/p2MJRg+oztunxshyUwCIgEEMhs+Rv2uA0FkDFkBYZtYYtdKl1WX4xuEQms1XCfyTEpn4izcteprfup28V4YvpqqgAhn8ACXE7FNIsHLWsDUOJWJ0OwAwj0VDUjZV5UAjAhl8kaKepe+E28Xy4itpKhhFn74/mwxLmvxLyOCR3mu1JXZsO25uAUF9EMt+wIjF2EpCM+kaG+Js+D4Z0NWL5AQrur5EKtqKzcDisgV2+p1J9JoGZhgMvvYEzmlJzo/See+ebom/HisBCpZT3HqS4MA9Nd3uxMJYBCwIZSiCJ5Um2KbKW3VEFtN9G87UWHYTUyrKzUeXMrYDYKsEEAufCEHDiXTzDRbWVmBVBPcSXB+68N5EKnH/e0fiUzK4DEosAJynWdgz/PIBdukJkEEAjACYqmFWacwbPIhZujoBQUTFAMQIX9Ru9Blj2Pe0q/moKa1JCQAssnsLM4Ntt8OPI0FBRsLmUTNhFOrx1oU3n8LUmjAHttv0TIZ/3FO5V7W3xG+mSAI9jTBZsH9/RWH448GQUl2iT8qr+Vuzob92TioXVlj1UH3h+6kUYnsHyGHbc5J+Nnsy98ArwbmS8fQ2WYWopOLyjq5jZ/UfDUXJyQ/4jR469LMGfkL70T9yTipfo1rbnwlt5RWnPhLeksCBEEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQZ4KrzWOewpx01UyVQ/+XWXA+MKT1VOIV582x9v6ZghPhndE/WmPmLT6AtgAZ7PGAOO4JxMPP/i8SeSuSuMzgC0lynxGFfyS6XsO9IwRZ1z5LtepVYCQP5ntqcJTrMDEDqhItQIQD5jOPP6qZHOVchtALKl/AioJ9Z9xTyFmwh71061BaJiv2F7c04iRqpluEv6KeyKxEfRs2yTbPyqtz0YPBHjBbKeYKl+46632gtsNwuS8QJkUNQnY+e/d34d0fmDwrNrn/Z8MxWK3xCGXzPUpFSk6MPmu85FOcUO+y7irU6TASOc6F5F/GUqq9FY3VN4oXsHJ9s1SZ4zhciPyJON1dXW02iDnR3q8INTd4BN84h/inkhsFMVl+0gE5LK+fCEtfSRr4mOgu+XyV/566YK8WOk8m0gORL9t3pOwSVUhcqEoOLtIw6nJUHSy+oQEGsrBiAQ5aVtrNuOa16/j3DnLiO+kxqlL6aIj5IRttE3V16TbQcnkOnpMPgvFQIIFK8gJPmu4Pki0Bt7A+dbX+2SobTfZRQnOhHL9WafhlX7kCSK8MO0bkyF9Nj0eWZCgJuebZcqayU0LgW4FN7JIRrBa32VSLTpCDQxDTfqut5JrBEVz+bJrqqRBfW7vpGCRWEByGkzDd2kruTaQ+/u3tjGeN2CuOwt8EQnImVYuTbIN7GsoiAbkpeMrytZKYDVIsg0MzX7GKZGKntxNtF4CiInd5CpwrfMHZo8UJWPsToFlCchZcr3gBAoi0yd5aW8rY/TWE5YlSCzlgaj2ZYe8EfO13yfBTkKPTEKnWy2ZGjmXdx6wXoKOTObhadvUgwYURB/5igJLEnQYVUk8Qs/pT2FTV0mJqhUFohIMYbPMqUycBhkzauuL0Gswxh+W4NRaCXMT93Xajr6uiC4JWmqNG0QkAC+YFo1KJ0qDvj79Q1+Rtl7jBFEJTmGnODUTpnSCDlFHJnOgr0lOMvcxCar69ptlVopxyhvmxNTGekjymvm7j0kAO+mpTopfxTfjDeN1nfa1cwDhgHJ3XSBYCoeBpAriQYJuNgp/vwhunAzp++tXvyIBCbV0eYJsoG2Oyg1TJHty955QuCIB2IGiNzHNd/PUTKkqoCC64vdFwjUSkMAkxwY+6/O2PvK8huL8ASNY2SYlJxt29DjnHJOwyyEQ3hMJ10qQAKZnPn19kHM+Tb4yo/flgqgEX6VICkZrX2hdO9B9UpT0weUvStDOJoZiNpuXvP1DdsiZXrsrWC9BNpccMrm6/+aaF3JDofyHnWBRggFPDD7siF3GXV/yx8JARILGo698RtgvCXxYvrJfjz2sAeSKuQQFztKJe3uXyes1xympwOdzCY7i/jTiwvfnd5z98yK1/LP56gxBkGfKv8nu4cB/MN9BAAAAAElFTkSuQmCC"
    },
    {
    id:2,
    name:"sample 3",
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn-9dxFiZVnxJVlYnkz0ndHBTjTU0TXC36EX-Q94ONypT91SVYzfaZkH_kMyj3GcUpw1c&usqp=CAU"
    },
    {
    id:3,
    name:"sample 4",
    img:"https://media.istockphoto.com/vectors/purple-teal-draped-net-on-ripple-subtle-curves-abstract-vector-waves-vector-id1208129617?k=20&m=1208129617&s=612x612&w=0&h=ztkVvCeMP4iY1eTRlN9rr1JScbgW4o22d83jXHVzuz4="
    },
   
]

  return (
    <div className="App">
     <Router>
         <Header/>
       <Switch>
         <Route path="/" exact>
            <Main samples={samples}/>
         </Route>
         <Route path="/create/:name">
            <Selected samples={samples}/>
         </Route>
       </Switch>
     </Router>
    </div>
  );
}

export default App;

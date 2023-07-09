// import OwlCarousel from 'react-owl-carousel2';
import './App.css'
import { RouterProvider } from "react-router";
import { router } from "./Router/router";

function App() {
  //   const options = {
  //     nav: true,
  //     rewind: true,
  //     dots: true,
  //     dotsData: true,
  //     autoplay: true,
  //     responsive: {
  //       0:{
  //           items:1
  //       },
  //       650:{
  //           items:2
  //       },
  //       991:{
  //           items:3
  //       },
  //       1100: {
  //           items: 4
  //       }
  //   }
  // };
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
      {/* <OwlCarousel options={options}>
        <div className='item' data-dot="<span>1</span>">1</div>
        
        <div className='item' data-dot="<span>2</span>">2</div>
        
        <div className='item' data-dot="<span>3</span>">3</div>
        <div className='item' data-dot="<span>4</span>">4</div>
        <div className='item' data-dot="<span>5</span>">5</div>
        <div className='item' data-dot="<span>6</span>">6</div>
      </OwlCarousel> */}
    </div>
  );
}

export default App;

import Header from "./Header";
import Sidebar from "./Sidebar";
import myImage from "../assets/yoga.png"



export const About = () => {
  return (
    <>
      <h1 className="about"> About </h1>.

      <img src={myImage} className="about-image" alt="image-icon" />

      <p className="about-text">
      
        Welcome to Wellness Todo, your daily companion for cultivating a healthier and happier life. Our app is designed to help you prioritize and track wellness tasks that contribute to your overall well-being.
      
        In the hustle and bustle of daily life, it's essential to take a moment for self-care. Wellness Todo encourages you to focus on activities that nourish your mind, body, and soul.
      
        Whether it's a morning meditation, a brisk walk, a nutritious meal, or ensuring you stay hydrated, our app is here to support your journey to a more balanced and mindful lifestyle.
  
        Feel free to customize your daily to-do list with tasks that resonate with your wellness goals. Remember, small, consistent actions lead to significant positive changes over time.
     
        Start your wellness journey today with Wellness Todo, and make each day a step towards a healthier, happier you!
      </p>
    </>
  );
};

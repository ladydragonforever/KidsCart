import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch,Route } from 'react-router-dom';
import NavBarContainer from "./nav/navbar_container";
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import ChoseItemIndexContainer from "./choseItem/choseItemIndex_container";
import HomeContainer from "./home/home_container";
import Footer from './footer';
import Modal from './modal/modal';
import MealSearchContainer from "../components/meal/meal_search_container";
import MealItemContainer from '../components/meal/meal_item_container';
import BoyOrGirlContainer from './childrenForm/boyOrGirl_container';
import DetailFormContainer from './childrenForm/detail_form_container';
import SelectMealContainer from './select_meals/select_meals_container';

const App = () => (
    <div> 
      <Modal />
      <header>
         <NavBarContainer />
      </header>
        <Switch>
            <Route exact path="/lunchBoxSelect" component={ChoseItemIndexContainer} />
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
            <Route path="/meals/:mealId" component={MealItemContainer} />
            <Route path="/search/:query" component={MealSearchContainer} />
            <Route path="/search/" component={MealSearchContainer} />
            <Route exact path="/choseGender" component={BoyOrGirlContainer} />
            <Route exact path="/childForm" component={DetailFormContainer} />
            <Route exact path="/generate-meals/:childId/" component={SelectMealContainer} />
            <Route exact path="/" component={HomeContainer} />
        </Switch>
        <Footer />
    </div>
);

export default App;
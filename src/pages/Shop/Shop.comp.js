import React from "react";
import {Route} from 'react-router-dom'

import CollectionPage from '../../pages/Collection/Collection.Comp'
import CollectionOverview from "../../components/Colletion-Overview/Colletion-Overview";

const ShopPage = ({match}) => (
    <div className = "shop-page" >
    <Route exact path = {`${match.path}`} component = {CollectionOverview} />
    <Route path = {`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );

export default ShopPage;




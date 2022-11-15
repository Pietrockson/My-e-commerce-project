import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import  CollectionPreview from "../Collection-Preview/Collection-preview";
import { selectCollectionsForPreview } from "../../Redux/Shop/Shop.selectors";

import "./Colletion-Overview.scss";

const CollectionOverview = ({collections}) => (
  <div className="collection-overview">
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionOverview);



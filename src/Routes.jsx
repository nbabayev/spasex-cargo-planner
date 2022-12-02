import * as React from 'react'
import { useRoutes } from "react-router-dom";
import { allRoutes } from './shared/allRoutes';


const Routes = () => {
  const Route = useRoutes(allRoutes);
  return Route;
}

export default Routes;
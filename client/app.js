import React from "react";
import { Route, Routes } from "react-router-dom";
import { ErrorPage } from "./ErrorPage";
import Sound from "./sound";
import { Start } from "./start";

export const App = () => {
	return (
		<Routes>
			<Route exact path='/' element={<Start />} />
			<Route path='/play' element={<Sound />} />
			<Route element={<Start />} />
		</Routes>
	);
};

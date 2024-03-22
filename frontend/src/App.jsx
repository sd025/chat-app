import { Box, Container } from "@chakra-ui/react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header";
import AuthPage from "./pages/AuthPage";
import { useRecoilValue } from "recoil";
import userAtom from "./atoms/userAtom";
import UpdateProfilePage from "./pages/UpdateProfilePage";
import ChatPage from "./pages/ChatPage";
import { SettingsPage } from "./pages/SettingsPage";

function App() {
	const user = useRecoilValue(userAtom);
	const { pathname } = useLocation();
	return (
		<Box position={"relative"} w='full'>
			<Container maxW={pathname === "/" ? { base: "620px", md: "900px" } : "620px"}>
				<Header />
				<Routes>
					<Route path='/' element={user ? <ChatPage /> : <Navigate to='/auth' />} />
					<Route path='/auth' element={!user ? <AuthPage /> : <Navigate to='/' />} />
					<Route path='/update' element={user ? <UpdateProfilePage /> : <Navigate to='/auth' />} />
					<Route path='/settings' element={user ? <SettingsPage /> : <Navigate to={"/auth"} />} />
				</Routes>
			</Container>
		</Box>
	);
}

export default App;

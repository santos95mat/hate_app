import { ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./auth";
import { UsersProvider } from "./users";

interface ProvidersProps {
	children: ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
	return (
		<BrowserRouter>
			<AuthProvider>
				<UsersProvider>{children}</UsersProvider>
			</AuthProvider>
		</BrowserRouter>
	);
};

export default Providers;

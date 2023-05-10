import Image from "next/image";
import Menu from "./Menu";
import Auth from "./Auth";
import ToggleMenu from "./ToggleMenu";

const Navbar = () => {
	return (
		<section>
			<nav className="navbar navbar-expand-lg navbar-light bg-light bg-white pt-lg-40 pb-lg-40 pt-30 pb-50">
				<div className="container-fluid">
					<a className="navbar-brand" href="#">
						<Image src="/icon/logo.svg" width={60} height={60} alt="logo" />
					</a>
					<ToggleMenu />
					<div className="collapse navbar-collapse" id="navbarNav">
						<ul className="navbar-nav ms-auto text-lg gap-lg-0 gap-2">
							<Menu title="Home" active href="/" />
							<Menu title="Games" href="/games" />
							<Menu title="Rewards" />
							<Menu title="Discover" />
							<Menu title="Global Rank" />
							<Auth />
						</ul>
					</div>
				</div>
			</nav>
		</section>
	);
};

export default Navbar;

import Footer from "./Footer";
import MenuItem from "./MenuItem";
import Profile from "./Profile";

const SideBar = () => {
	return (
		<section className="sidebar">
			<div className="content pt-50 pb-30 ps-30">
				<Profile />
				<div className="menus">
					<MenuItem icon="icon-menu-overview.svg" title="Overview" active />
					<MenuItem icon="icon-menu-transaction.svg" title="Transactions" />
					<MenuItem icon="icon-menu-messages.svg" title="Messages" />
					<MenuItem icon="icon-menu-card.svg" title="Card" />
					<MenuItem icon="icon-menu-rewards.svg" title="Rewards" />
					<MenuItem icon="icon-menu-settings.svg" title="Settings" />
					<MenuItem icon="icon-menu-logout.svg" title="Log Out" />
				</div>
				<Footer />
			</div>
		</section>
	);
};

export default SideBar;

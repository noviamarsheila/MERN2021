import Footer from "./Footer";
import MenuItem from "./MenuItem";
import Profile from "./Profile";

interface SideBarProps {
	activeMenu: "overview" | "transactions" | "settings";
}

const SideBar = (props: SideBarProps) => {
	const { activeMenu } = props;
	return (
		<section className="sidebar">
			<div className="content pt-50 pb-30 ps-30">
				<Profile />
				<div className="menus">
					<MenuItem icon="icon-menu-overview" title="Overview" active={activeMenu === "overview"} href="/member" />
					<MenuItem icon="icon-menu-transaction" title="Transactions" active={activeMenu === "transactions"} href="/member/transactions" />
					<MenuItem icon="icon-menu-messages" title="Messages" href="/member" />
					<MenuItem icon="icon-menu-card" title="Card" href="/member" />
					<MenuItem icon="icon-menu-rewards" title="Rewards" href="/member" />
					<MenuItem icon="icon-menu-settings" title="Settings" active={activeMenu === "settings"} href="/member/edit-profile" />
					<MenuItem icon="icon-menu-logout" title="Log Out" href="/sign-in" />
				</div>
				<Footer />
			</div>
		</section>
	);
};

export default SideBar;

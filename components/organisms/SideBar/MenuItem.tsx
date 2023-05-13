import Image from "next/image";
import cx from "classnames";

interface MenuItemProps {
	title: string;
	icon: "icon-menu-card" | "icon-menu-logout" | "icon-menu-messages" | "icon-menu-overview" | "icon-menu-rewards" | "icon-menu-settings" | "icon-menu-transaction";
	active?: boolean;
}

const MenuItem = (props: Partial<MenuItemProps>) => {
	const { title, icon, active } = props;

	const classItem = cx({
		item: true,
		"mb-30": true,
		active,
	});

	return (
		<div className={classItem}>
			<div className="me-3">
				<Image src={`/icon/${icon}`} alt="" width={25} height={25} />
			</div>
			<p className="item-title m-0">
				<a href="" className="text-lg text-decoration-none">
					{title}
				</a>
			</p>
		</div>
	);
};

export default MenuItem;

import Image from "next/image";
import cx from "classnames";
import Link from "next/link";

interface MenuItemProps {
	title: string;
	icon: "icon-menu-card" | "icon-menu-logout" | "icon-menu-messages" | "icon-menu-overview" | "icon-menu-rewards" | "icon-menu-settings" | "icon-menu-transaction";
	active?: boolean;
	href: string;
}

const MenuItem = (props: Partial<MenuItemProps>) => {
	const { title, icon, active, href = "/" } = props;

	const classItem = cx({
		item: true,
		"mb-30": true,
		active,
	});

	return (
		<div className={classItem}>
			<div className="me-3">
				<Image src={`/icon/${icon}.svg`} alt="" width={25} height={25} />
			</div>
			<p className="item-title m-0">
				<Link href={href} className="text-lg text-decoration-none">
					{title}
				</Link>
			</p>
		</div>
	);
};

export default MenuItem;

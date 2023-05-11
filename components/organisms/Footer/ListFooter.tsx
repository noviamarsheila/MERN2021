import Link from "next/link";

interface ListFooterProps {
	title: string;
	href: string;
}

const ListFooter = (props: Partial<ListFooterProps>) => {
	const { title, href = "/" } = props;

	return (
		<li className="mb-6">
			<Link href={href} className="text-lg color-palette-1 text-decoration-none">
				{title}
			</Link>
		</li>
	);
};

export default ListFooter;

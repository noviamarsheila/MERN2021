import cx from "classnames";

interface ReachedItemProps {
	title: string;
	price: string;
	nameClass: string;
}

const ReachedItem = (props: Partial<ReachedItemProps>) => {
	const { price, title, nameClass } = props;

	const classTitle = cx({
		"me-lg-35": true,
		"ms-lg-35": nameClass,
	});

	return (
		<div className={classTitle}>
			<p className="text-4xl text-lg-start text-center color-palette-1 fw-bold m-0">{price}</p>
			<p className="text-lg text-lg-start text-center color-palette-2 m-0">{title}</p>
		</div>
	);
};

export default ReachedItem;

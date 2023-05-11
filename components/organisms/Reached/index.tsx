import HorizontalLine from "@/components/atoms/ReachedItem/HorizontalLine";
import VerticalLine from "@/components/atoms/ReachedItem/VerticalLine";
import ReachedItem from "@/components/molecules/ReachedItem";

const Reached = () => {
	return (
		<section className="reached pt-50 pb-50">
			<div className="container-fluid">
				<div className="d-flex flex-lg-row flex-column align-items-center justify-content-center gap-lg-0 gap-4">
					<ReachedItem price={"290M+"} title="Players Top Up" nameClass="me-lg-35" />
					<VerticalLine />
					<HorizontalLine />
					<ReachedItem price={"12.500"} title="Games Available" />
					<HorizontalLine />
					<VerticalLine />
					<ReachedItem price={"99,9%"} title="Happy Players" />
					<HorizontalLine />
					<VerticalLine />
					<ReachedItem price={"4.7"} title="Rating Worldwide" />
				</div>
			</div>
		</section>
	);
};

export default Reached;

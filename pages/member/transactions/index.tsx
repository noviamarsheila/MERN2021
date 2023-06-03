import SideBar from "@/components/organisms/SideBar";
import TransactionContent from "@/components/organisms/TransactionContent";

const Transactions = () => {
	return (
		<section className="transactions overflow-auto">
			<SideBar activeMenu="transactions" />
			<TransactionContent />
		</section>
	);
};

export default Transactions;

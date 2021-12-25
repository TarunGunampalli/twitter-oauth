const Success = () => {
	const params = new URLSearchParams(window.location.search);
	const code = params.get('code');
	return (
		<div>
			<hi>Success</hi>
			<div>Access Code: {code}</div>
		</div>
	);
};

export default Success;

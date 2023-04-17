import React, { useState } from 'react';
function Class5() {
	const fun1 = (maxNum, deep) => {
		if (deep === 0) {
			return [];
		}
		const list = [];
		const num = Math.random() * maxNum;
		for (let i = 0; i < num; i++) {
			list[i] = {
				title: deep + '-' + i,
				label: '测试文案',
        defaultOpen:true
			};
			// @ts-ignore
			list[i].children = fun1(maxNum, deep - 1);
		}
		return list;
	};
	const 
	const defaultOpn = [];

	return (
		<div>
			<TreeComponent
				title={'第一个'}
				label={'xxx'}
				children={fun1(2, 6)}
				defaultOpn={defaultOpn}
			/>
		</div>
	);
	// defaultOpn && obj1  && obj2  =>
	// defaultOpn || obj2 || obj1  =>
	//  ! ?? && ()?:() ||
	//typeof
}

const TreeComponent = (props) => {
	const { title, label, children, defaultOpn } = props;
	const [runno, setRunno] = useState(defaultOpn);

	return (
		<div>
			{title}|{label}
			<br></br>
			{runno ? (
				<div>
					<button onClick={() => setRunno(false)}>收起8</button>
					<div style={{ marginLeft: 10 }}>
						{children?.map((item, index) => (
							<TreeComponent
								{...item}
								key={index}
							/>
						))}
					</div>
				</div>
			) : (
				<button onClick={() => setRunno(true)}>展开v</button>
			)}
		</div>
	);
};
export default Class5;

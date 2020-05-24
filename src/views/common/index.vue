<template>
	<div class="page-common-index-wrap">
		<section>
			<h4>水平居中</h4>
			<div class="hor-inline-block">
				<div class="parent">
					<div class="child">例子 1</div>
				</div>
			</div>
			<div class="hor-translate">
				<div class="parent">
					<div class="child">例子 2</div>
				</div>
			</div>
		</section>
		<section>
			<h4>垂直居中</h4>
			<div class="ver-table-cell">
				<div class="parent">
					<div class="child">DEMO</div>
				</div>
			</div>
		</section>
		<section>
			<h4>垂直水平居中</h4>
			<p>table-cell + vertical-align + text-align + inline-block</p>
			<div class="ver-hor-table-cell">
				<div class="parent">
					<div class="child">DEMO</div>
				</div>
			</div>
		</section>
		<section>
			<h4>垂直水平居中</h4>
			<p>position + transform</p>
			<div class="ver-hor-translate">
				<div class="parent">
					<div class="child">DEMO</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
	import { CellGroup, Cell } from 'vant'

	export default {
		components: {
			[CellGroup.name]: CellGroup,
			[Cell.name]: Cell,
		},
	}

</script>

<style lang="less">
	.page-common-index-wrap {

		.parent {
			background-color: darkred;

			.child {
				background-color: yellow;
			}
		}

		// 水平居中
		// inline-block + text-align
		.hor-inline-block {

			.parent {
				text-align: center;

				.child {
					display: inline-block;
				}
			}
		}

		// 水平居中
		// 定位 + 位移
		.hor-translate {
			.parent {
				position: relative;

				.child {
					position: absolute;
					left: 50%;
					transform: translateX(-50%);
				}
			}
		}

		// table-cell
		// table-cell + vertical-align
		.ver-table-cell {
			.parent {
				height: 100px;
				display: table-cell;
				vertical-align: middle;
			}
		}

		// 垂直水平居中
		// table-cell + vertical-align + text-align + inline-block
		.ver-hor-table-cell {
			.parent {
				height: 200px;
				width: 200px;
				display: table-cell;
				vertical-align: middle;
				text-align: center;

				.child {
					width: 50px;
					display: inline-block;
				}
			}
		}

		// 垂直水平居中
		// position + transform
		.ver-hor-translate {

			.parent {
				position: relative;
				height: 200px;
				width: 200px;

				.child {
					position: absolute;
					left: 50%;
					top: 50%;
					transform: translate(-50%, -50%);
				}
			}
		}

	}
</style>

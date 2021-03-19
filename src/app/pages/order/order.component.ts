import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-order',
	templateUrl: './order.component.html',
	styleUrls: ['./order.component.scss']
})

export class OrderComponent implements OnInit{

	isFavorite = false;
	isTablet: boolean;
	isMobile: boolean;
	shrinkHeader = false;
	toggleOverlay = false;
	isSuccessfullySent = false;

	segments = ['эконом', 'стандарт']

	photos = [
		'assets/images/order/photo-for-order.png',
		'assets/images/order/photo-for-order.png',
		'assets/images/order/photo-for-order.png',
		'assets/images/order/photo-for-order.png',
		'assets/images/order/photo-for-order.png',
		'assets/images/order/photo-for-order.png'
	]

	ngOnInit() {
		if (window.innerWidth < 1276) {
			this.isTablet = true
		}

		if (window.innerWidth < 768) {
			this.isTablet = false
			this.isMobile = true
		}

		this.animateHeader();
	}

	animateHeader(): void {
	  window.onscroll = () => this.shrinkHeader = (window.pageYOffset > 100) ? true : false;
	};

	getColor(segment) {
		if (segment === 'эконом') {
			return '#F8601F'
		} else if (segment === 'стандарт') {
			return '#0D6FE3'
		} else if (segment === 'премиум') {
			return '#9F8C66'
		}
	}

	getBackground(segment) {
		if (segment === 'эконом') {
			return 'linear-gradient(0deg, rgba(248, 96, 31, 0.2), rgba(248, 96, 31, 0.2)), #FFFFFF'
		} else if (segment === 'стандарт') {
			return 'linear-gradient(0deg, rgba(13, 111, 227, 0.2), rgba(13, 111, 227, 0.2)), #FFFFFF'
		} else if (segment === 'премиум') {
			return 'linear-gradient(0deg, rgba(159, 140, 102, 0.2), rgba(159, 140, 102, 0.2)), #FFFFFF'
		}
	}

}
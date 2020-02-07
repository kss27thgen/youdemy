$(function() {

	////// Side Nav /////
	$('#sideNavOpen').on('click', function() {
		$('.overlay').removeClass('inactive');
		$('.sideNav').removeClass('inactive');
		$('body').css('overflow', 'hidden');
	});
	$('.overlay').on('click', function() {
		$('.overlay').addClass('inactive');
		$('.sideNav').addClass('inactive');
		$('body').css('overflow', 'auto');
	});

	/// slide effect ///
	$('.slide-right').on('click', function() {
		$('.sideNav-wrapper').addClass('slide-right');
	});

	$('#slide-left').on('click', function() {
		$('.sideNav-wrapper').removeClass('slide-right');
	});

	// inner content //
	$('.sideNav__header').on('click', function() {
		$html = `
			<ul class="sideNav__right-list">
				<li class="sideNav__right--item">
					<p>Alerts</p>
				</li>
				<li class="sideNav__right--link">
					<a href="#">My notifications</a>
				</li>
				<li class="sideNav__right--link">
					<a href="#">Messages</a>
				</li>
				<li class="sideNav__right--link">
					<a href="#">Wishlist</a>
				</li>
				<li class="sideNav__right--item">
					<p>Account</p>
				</li>
				<li class="sideNav__right--link">
					<a href="#">Notifications settings</a>
				</li>
				<li class="sideNav__right--link">
					<a href="#">Payment methods</a>
				</li>
				<li class="sideNav__right--link">
					<a href="#">Udemy credits</a>
				</li>
				<li class="sideNav__right--link">
					<a href="#">purchase history</a>
				</li>
				<li class="sideNav__right--item">
					<p>profile</p>
				</li>
				<li class="sideNav__right--link">
					<a href="#">public profile</a>
				</li>
				<li class="sideNav__right--link">
					<a href="#">Edit profile</a>
				</li>
				<li class="sideNav__right--link">
					<a href="#">Log out</a>
				</li>
			</ul>
		`;
		$('.sideNav__right__body').html($html);
	});

	$('#sideNavDevelopment').on('click', function() {
		$html = `
			<ul class="sideNav__right-list">
				<li class="sideNav__right--link sideNav__right--link-first">
					<a href="#">All web development</a>
				</li>
				<li class="sideNav__right--link">
					<a href="#">Web development</a>
				</li>
				<li class="sideNav__right--link">
					<a href="#">JavaScript</a>
				</li>
				<li class="sideNav__right--link">
					<a href="#">Angular</a>
				</li>
				<li class="sideNav__right--link">
					<a href="#">React</a>
				</li>
				<li class="sideNav__right--link">
					<a href="#">CSS</a>
				</li>
				<li class="sideNav__right--link">
					<a href="#">PHP</a>
				</li>
				<li class="sideNav__right--link">
					<a href="#">Node.js</a>
				</li>
				<li class="sideNav__right--link">
					<a href="#">WordPress</a>
				</li>
				<li class="sideNav__right--link">
					<a href="#">Vue.js</a>
				</li>
			</ul>
		`;
		$('.sideNav__right__body').html($html);
	});

	$('#sideNavMobile').on('click', function() {
		$html = `
			<ul class="sideNav__right-list">
				<li class="sideNav__right--link sideNav__right--link-first">
					<a href="#">All mobile apps</a>
				</li>
				<li class="sideNav__right--link">
					<a href="#">Android Development</a>
				</li>
				<li class="sideNav__right--link">
					<a href="#">iOS Development</a>
				</li>
				<li class="sideNav__right--link">
					<a href="#">Google Flutter</a>
				</li>
				<li class="sideNav__right--link">
					<a href="#">Swift</a>
				</li>
				<li class="sideNav__right--link">
					<a href="#">React Ntive</a>
				</li>
				<li class="sideNav__right--link">
					<a href="#">Dart programming language</a>
				</li>
				<li class="sideNav__right--link">
					<a href="#">Mobile development</a>
				</li>
				<li class="sideNav__right--link">
					<a href="#">Kotlin</a>
				</li>
				<li class="sideNav__right--link">
					<a href="#">Redux framework</a>
				</li>
			</ul>
		`;
		$('.sideNav__right__body').html($html);
	});

	$('#sideNavGame').on('click', function() {
		$html = `
			<ul class="sideNav__right-list">
				<li class="sideNav__right--link sideNav__right--link-first">
					<a href="#">All game development</a>
				</li>
				<li class="sideNav__right--link">
					<a href="#">Unity</a>
				</li>
				<li class="sideNav__right--link">
					<a href="#">C#</a>
				</li>
				<li class="sideNav__right--link">
					<a href="#">Game development fundamentals</a>
				</li>
				<li class="sideNav__right--link">
					<a href="#">Unreal engine</a>
				</li>
				<li class="sideNav__right--link">
					<a href="#">3D game development</a>
				</li>
				<li class="sideNav__right--link">
					<a href="#">C++</a>
				</li>
				<li class="sideNav__right--link">
					<a href="#">2D game development</a>
				</li>
				<li class="sideNav__right--link">
					<a href="#">Unreal engine blueprints</a>
				</li>
				<li class="sideNav__right--link">
					<a href="#">Mobile game development</a>
				</li>
			</ul>
		`;
		$('.sideNav__right__body').html($html);
	});

	$('#sideNavFinance').on('click', function() {
		$html = `
			<ul class="sideNav__right-list">
				<li class="sideNav__right--link sideNav__right--link-first">
					<a href="#">All finance</a>
				</li>
				<li class="sideNav__right--link">
					<a href="#">Finacial analysis</a>
				</li>
				<li class="sideNav__right--link">
					<a href="#">Investing</a>
				</li>
				<li class="sideNav__right--link">
					<a href="#">Stock Trading</a>
				</li>
				<li class="sideNav__right--link">
					<a href="#">Finance fundamentals</a>
				</li>
				<li class="sideNav__right--link">
					<a href="#">Financial modeling</a>
				</li>
				<li class="sideNav__right--link">
					<a href="#">Forex</a>
				</li>
				<li class="sideNav__right--link">
					<a href="#">Excel</a>
				</li>
				<li class="sideNav__right--link">
					<a href="#">Accounting</a>
				</li>
				<li class="sideNav__right--link">
					<a href="#">Python</a>
				</li>
			</ul>
		`;
		$('.sideNav__right__body').html($html);
	});

	$('#sideNavData').on('click', function() {
		$html = `
			<ul class="sideNav__right-list">
				<li class="sideNav__right--link sideNav__right--link-first">
					<a href="#">All data & analytics</a>
				</li>
				<li class="sideNav__right--link">
					<a href="#">SQL</a>
				</li>
				<li class="sideNav__right--link">
					<a href="#">Microsoft power BI</a>
				</li>
				<li class="sideNav__right--link">
					<a href="#">Business analysis</a>
				</li>
				<li class="sideNav__right--link">
					<a href="#">Tableau</a>
				</li>
				<li class="sideNav__right--link">
					<a href="#">Business inteligence</a>
				</li>
				<li class="sideNav__right--link">
					<a href="#">MySQL</a>
				</li>
				<li class="sideNav__right--link">
					<a href="#">Data analysis</a>
				</li>
				<li class="sideNav__right--link">
					<a href="#">Data modeling</a>
				</li>
				<li class="sideNav__right--link">
					<a href="#">Big data</a>
				</li>
			</ul>
		`;
		$('.sideNav__right__body').html($html);
	});

	$('#sideNavPersonal').on('click', function() {
		$html = `
			<ul class="sideNav__right-list">
				<li class="sideNav__right--link sideNav__right--link-first">
					<a href="#">All personal transformation</a>
				</li>
				<li class="sideNav__right--link">
					<a href="#">Life coaching</a>
				</li>
				<li class="sideNav__right--link">
					<a href="#">Reiki</a>
				</li>
				<li class="sideNav__right--link">
					<a href="#">Neuro-linguistic programming</a>
				</li>
				<li class="sideNav__right--link">
					<a href="#">Energy healing</a>
				</li>
				<li class="sideNav__right--link">
					<a href="#">Neuroscience</a>
				</li>
				<li class="sideNav__right--link">
					<a href="#">Emotional inteligence</a>
				</li>
				<li class="sideNav__right--link">
					<a href="#">Hyponotherapy</a>
				</li>
				<li class="sideNav__right--link">
					<a href="#">Mindfulness</a>
				</li>
				<li class="sideNav__right--link">
					<a href="#">Meditation</a>
				</li>
			</ul>
		`;
		$('.sideNav__right__body').html($html);
	});

	$('#sideNavGraphic').on('click', function() {
		$html = `
			<ul class="sideNav__right-list">
				<li class="sideNav__right--link sideNav__right--link-first">
					<a href="#">All Graphic design</a>
				</li>
				<li class="sideNav__right--link">
					<a href="#">Photoshop</a>
				</li>
				<li class="sideNav__right--link">
					<a href="#">Graphic Design</a>
				</li>
				<li class="sideNav__right--link">
					<a href="#">Drawing</a>
				</li>
				<li class="sideNav__right--link">
					<a href="#">Adobe illustrator</a>
				</li>
				<li class="sideNav__right--link">
					<a href="#">Digital painting</a>
				</li>
				<li class="sideNav__right--link">
					<a href="#">Indesign</a>
				</li>
				<li class="sideNav__right--link">
					<a href="#">Character design</a>
				</li>
				<li class="sideNav__right--link">
					<a href="#">Figure drawing</a>
				</li>
				<li class="sideNav__right--link">
					<a href="#">Logo design</a>
				</li>
			</ul>
		`;
		$('.sideNav__right__body').html($html);
	});

	$('#sideNavDegital').on('click', function() {
		$html = `
			<ul class="sideNav__right-list">
				<li class="sideNav__right--link sideNav__right--link-first">
					<a href="#">All degital marketing</a>
				</li>
				<li class="sideNav__right--link">
					<a href="#">Digital marketing</a>
				</li>
				<li class="sideNav__right--link">
					<a href="#">Google Ads (Adwords)</a>
				</li>
				<li class="sideNav__right--link">
					<a href="#">Google Ads Certification</a>
				</li>
				<li class="sideNav__right--link">
					<a href="#">Social media marketing</a>
				</li>
				<li class="sideNav__right--link">
					<a href="#">Marketing strategy</a>
				</li>
				<li class="sideNav__right--link">
					<a href="#">Facebook marketing</a>
				</li>
				<li class="sideNav__right--link">
					<a href="#">Google analytics</a>
				</li>
				<li class="sideNav__right--link">
					<a href="#">Business strategy</a>
				</li>
				<li class="sideNav__right--link">
					<a href="#">Email marketing</a>
				</li>
			</ul>
		`;
		$('.sideNav__right__body').html($html);
	});

	$('#sideNavAll').on('click', function() {
		$html = `
			<ul class="sideNav__right-list">
				<li class="sideNav__right--link">
					<a href="#">Development</a>
				</li>
				<li class="sideNav__right--link">
					<a href="#">Business</a>
				</li>
				<li class="sideNav__right--link">
					<a href="#">Finance & Accounting</a>
				</li>
				<li class="sideNav__right--link">
					<a href="#">IT & Software</a>
				</li>
				<li class="sideNav__right--link">
					<a href="#">Office productivity</a>
				</li>
				<li class="sideNav__right--link">
					<a href="#">Personal development</a>
				</li>
				<li class="sideNav__right--link">
					<a href="#">Design</a>
				</li>
				<li class="sideNav__right--link">
					<a href="#">Marketing</a>
				</li>
				<li class="sideNav__right--link">
					<a href="#">Lifestyle</a>
				</li>
				<li class="sideNav__right--link">
					<a href="#">Photography</a>
				</li>
				<li class="sideNav__right--link">
					<a href="#">Health & Fitness</a>
				</li>
				<li class="sideNav__right--link">
					<a href="#">Music</a>
				</li>
				<li class="sideNav__right--link">
					<a href="#">Teaching & Academics</a>
				</li>
			</ul>
		`;
		$('.sideNav__right__body').html($html);
	});







	/////// Header hover effect //////

	// S-shopping-cart //
	$('.header-s__right, .shopping-cart-dropdown').hover(
		function () {
			$('.shopping-cart-dropdown').removeClass('inactive')
		}, function () {
			$('.shopping-cart-dropdown').addClass('inactive')
		}
	);

	// business//
	$('.header-m__right__menu--business, .business-dropdown').hover(
		function () {
			$('.business-dropdown').removeClass('inactive')
		}, function () {
			$('.business-dropdown').addClass('inactive')
		}
	);

	// teach //
	$('.header-m__right__menu--teach, .teach-dropdown').hover(
		function () {
			$('.teach-dropdown').removeClass('inactive')
		}, function () {
			$('.teach-dropdown').addClass('inactive')
		}
	);

	// shopping-cart //
	$('.header-m__right__icons-shopping-cart, .shopping-cart-dropdown').hover(
		function () {
			$('.shopping-cart-dropdown').removeClass('inactive')
		}, function () {
			$('.shopping-cart-dropdown').addClass('inactive')
		}
	);

	// me //
	$('.header-m__right__icons-me, .me-dropdown').hover(
		function () {
			$('.me-dropdown').removeClass('inactive')
		}, function () {
			$('.me-dropdown').addClass('inactive')
		}
	);

		// categories //
	$('.header-m__left-categories').hover(function() {
		$('.categories-dropdown__first').removeClass('inactive');
	}, function () {
		$('.categories-dropdown__first').addClass('inactive');
	});

	$('.categories-dropdown__first, .categories-dropdown__second, .categories-dropdown__third').hover(function() {
		$('.categories-dropdown__second').removeClass('inactive');
	}, function () {
		$('.categories-dropdown__second').addClass('inactive');
	});

	$('.categories-dropdown__second, .categories-dropdown__third').hover(function() {
		$('.categories-dropdown__third').removeClass('inactive');
	}, function () {
		$('.categories-dropdown__third').addClass('inactive');
	});

	// cate1hover //
	$('.categories-dropdown').on('mouseenter', '#cate1Development', function() {
		$html = `
			<li class="categories-dropdown__second-item" id="cate2Web">
				<div class="categories-dropdown__second-item-inner">
					<a>Web Development</a>
					<i class="fas fa-chevron-right"></i>
				</div>
			</li>
			<li class="categories-dropdown__second-item" id="cate2Data">
				<div class="categories-dropdown__second-item-inner">
					<a>Data Science</a>
					<i class="fas fa-chevron-right"></i>
				</div>
			</li>
			<li class="categories-dropdown__second-item" id="cate2Mobile">
				<div class="categories-dropdown__second-item-inner">
					<a>Mobile Apps</a>
					<i class="fas fa-chevron-right"></i>
				</div>
			</li>
		`
		$('.categories-dropdown__second-list').html($html);
	});

	$('.categories-dropdown').on('mouseenter', '#cate1Business', function () {
		$html = `
			<li class="categories-dropdown__second-item" id="cate2Finance">
				<div class="categories-dropdown__second-item-inner">
					<a>Finance</a>
					<i class="fas fa-chevron-right"></i>
				</div>
			</li>
			<li class="categories-dropdown__second-item" id="cate2Management">
				<div class="categories-dropdown__second-item-inner">
					<a>Management</a>
					<i class="fas fa-chevron-right"></i>
				</div>
			</li>
			<li class="categories-dropdown__second-item" id="cate2Sales">
				<div class="categories-dropdown__second-item-inner">
					<a>Sales</a>
					<i class="fas fa-chevron-right"></i>
				</div>
			</li>
		`
		$('.categories-dropdown__second-list').html($html);
	});

	$('.categories-dropdown').on('mouseenter', '#cate1Finance', function () {
		$html = `
			<li class="categories-dropdown__second-item" id="cate2Bookkeeping">
				<div class="categories-dropdown__second-item-inner">
					<a>Bookkeeping</a>
					<i class="fas fa-chevron-right"></i>
				</div>
			</li>
			<li class="categories-dropdown__second-item" id="cate2Compliance">
				<div class="categories-dropdown__second-item-inner">
					<a>Compliance</a>
					<i class="fas fa-chevron-right"></i>
				</div>
			</li>
			<li class="categories-dropdown__second-item" id="cate2Taxes">
				<div class="categories-dropdown__second-item-inner">
					<a>Taxes</a>
					<i class="fas fa-chevron-right"></i>
				</div>
			</li>
		`
		$('.categories-dropdown__second-list').html($html);
	});

	// cate2hover //
	$('.categories-dropdown').on('mouseenter', '#cate2Web', function () {
		$html = `
			<li class="categories-dropdown__third-item" id="cate3Java">
				<div class="categories-dropdown__third-item-inner">
					<a href="#">Java</a>
				</div>
			</li>
			<li class="categories-dropdown__third-item" id="cate3Angular">
				<div class="categories-dropdown__third-item-inner">
					<a href="#">Angular</a>
				</div>
			</li>
			<li class="categories-dropdown__third-item" id="cate3React">
				<div class="categories-dropdown__third-item-inner">
					<a href="#">React</a>
				</div>
			</li>
		`
		$('.categories-dropdown__third-list').html($html);

	});

	$('.categories-dropdown').on('mouseenter', '#cate2Data', function () {
		$html = `
			<li class="categories-dropdown__third-item">
				<div class="categories-dropdown__third-item-inner">
					<a href="#">Machine Learning</a>
				</div>
			</li>
			<li class="categories-dropdown__third-item">
				<div class="categories-dropdown__third-item-inner">
					<a href="#">Deep Learning</a>
				</div>
			</li>
			<li class="categories-dropdown__third-item">
				<div class="categories-dropdown__third-item-inner">
					<a href="#">Data Analycis</a>
				</div>
			</li>
		`
		$('.categories-dropdown__third-list').html($html);
	});

	$('.categories-dropdown').on('mouseenter', '#cate2Mobile', function () {
		$html = `
			<li class="categories-dropdown__third-item">
				<div class="categories-dropdown__third-item-inner">
					<a href="#">Android</a>
				</div>
			</li>
			<li class="categories-dropdown__third-item">
				<div class="categories-dropdown__third-item-inner">
					<a href="#">iOS</a>
				</div>
			</li>
			<li class="categories-dropdown__third-item">
				<div class="categories-dropdown__third-item-inner">
					<a href="#">Google Flutter</a>
				</div>
			</li>
		`
		$('.categories-dropdown__third-list').html($html);
	});

	$('.categories-dropdown').on('mouseenter', '#cate2Finance', function () {
		$html = `
			<li class="categories-dropdown__third-item">
				<div class="categories-dropdown__third-item-inner">
					<a href="#">Investing</a>
				</div>
			</li>
			<li class="categories-dropdown__third-item">
				<div class="categories-dropdown__third-item-inner">
					<a href="#">Stock trading</a>
				</div>
			</li>
			<li class="categories-dropdown__third-item">
				<div class="categories-dropdown__third-item-inner">
					<a href="#">Forex</a>
				</div>
			</li>
		`
		$('.categories-dropdown__third-list').html($html);
	});

	$('.categories-dropdown').on('mouseenter', '#cate2Management', function () {
		$html = `
			<li class="categories-dropdown__third-item">
				<div class="categories-dropdown__third-item-inner">
					<a href="#">Leadership</a>
				</div>
			</li>
			<li class="categories-dropdown__third-item">
				<div class="categories-dropdown__third-item-inner">
					<a href="#">Risk management</a>
				</div>
			</li>
			<li class="categories-dropdown__third-item">
				<div class="categories-dropdown__third-item-inner">
					<a href="#">Agile</a>
				</div>
			</li>
		`
		$('.categories-dropdown__third-list').html($html);
	});

	$('.categories-dropdown').on('mouseenter', '#cate2Sales', function () {
		$html = `
			<li class="categories-dropdown__third-item">
				<div class="categories-dropdown__third-item-inner">
					<a href="#">B2B skills</a>
				</div>
			</li>
			<li class="categories-dropdown__third-item">
				<div class="categories-dropdown__third-item-inner">
					<a href="#">Presentation</a>
				</div>
			</li>
			<li class="categories-dropdown__third-item">
				<div class="categories-dropdown__third-item-inner">
					<a href="#">Customer service</a>
				</div>
			</li>
		`
		$('.categories-dropdown__third-list').html($html);
	});

	$('.categories-dropdown').on('mouseenter', '#cate2Bookkeeping', function () {
		$html = `
			<li class="categories-dropdown__third-item">
				<div class="categories-dropdown__third-item-inner">
					<a href="#">Bookkeeping</a>
				</div>
			</li>
			<li class="categories-dropdown__third-item">
				<div class="categories-dropdown__third-item-inner">
					<a href="#">SAP FICE</a>
				</div>
			</li>
			<li class="categories-dropdown__third-item">
				<div class="categories-dropdown__third-item-inner">
					<a href="#">Cost accounting</a>
				</div>
			</li>
		`
		$('.categories-dropdown__third-list').html($html);
	});

	$('.categories-dropdown').on('mouseenter', '#cate2Compliance', function () {
		$html = `
			<li class="categories-dropdown__third-item">
				<div class="categories-dropdown__third-item-inner">
					<a href="#">Risk management</a>
				</div>
			</li>
			<li class="categories-dropdown__third-item">
				<div class="categories-dropdown__third-item-inner">
					<a href="#">IFRS</a>
				</div>
			</li>
			<li class="categories-dropdown__third-item">
				<div class="categories-dropdown__third-item-inner">
					<a href="#">Internal Auditing</a>
				</div>
			</li>
		`
		$('.categories-dropdown__third-list').html($html);
	});

	$('.categories-dropdown').on('mouseenter', '#cate2Taxes', function () {
		$html = `
			<li class="categories-dropdown__third-item">
				<div class="categories-dropdown__third-item-inner">
					<a href="#">Tax preparation</a>
				</div>
			</li>
			<li class="categories-dropdown__third-item">
				<div class="categories-dropdown__third-item-inner">
					<a href="#">Goods & Seavices tax</a>
				</div>
			</li>
			<li class="categories-dropdown__third-item">
				<div class="categories-dropdown__third-item-inner">
					<a href="#">Value added tax(VAT)</a>
				</div>
			</li>
		`
		$('.categories-dropdown__third-list').html($html);
	});













	///// Business info /////
	$('.business-info-close').on('click', function() {
		$('.business-info').css('display', 'none')
	});


  // Toggleable menu
  $('#toggleOne, #toggleTwo' ).on('click', function() {
    $marker = $("input[name='toggleable']:checked").val();

    if ($marker == 'toggleOne') {
      $html = `
        <a href="#">
						<div class="toggleable__card">
							<div class="toggleable__card__left">
								<img src="images/ecma.jpg">
							</div>
							<div class="toggleable__card__right">
								<div class="toggleable__card__right__upper">
									<h5 class="toggleable__card__right__upper-title">ES6, ES7 & ES8, TIME to update your JavaScript / ECMAScript!</h5>
									<p class="toggleable__card__right__upper-updated">Updated 1/2020</p>
								</div>
								<div class="toggleable__card__right__rating">
									<div class="toggleable__card__right__rating-star">
										<i class="fas fa-star"></i>
										4.3
									</div>
									<div class="toggleable__card__right__rating-subscriber">
										<i class="fas fa-user"></i>
										6,617
									</div>
								</div>
							</div>
							<i class="far fa-heart toggleable__card-heart">
							</i>
							<p class="toggleable__card-price">¥23,400</p>
						</div>
					</a>

					<a href="#">
						<div class="toggleable__card">
							<div class="toggleable__card__left">
								<img src="images/jsbeginner.jpg">
							</div>
							<div class="toggleable__card__right">
								<div class="toggleable__card__right__upper">
									<h5 class="toggleable__card__right__upper-title">Javascript basic for begginers</h5>
									<p class="toggleable__card__right__upper-updated">Updated 11/2019</p>
								</div>
								<div class="toggleable__card__right__rating">
									<div class="toggleable__card__right__rating-star">
										<i class="fas fa-star"></i>
										4.8
									</div>
									<div class="toggleable__card__right__rating-subscriber">
										<i class="fas fa-user"></i>
										22,301
									</div>
								</div>
							</div>
							<i class="far fa-heart toggleable__card-heart">
							</i>
							<p class="toggleable__card-price">¥14,400</p>
						</div>
					</a>
      `
      $('.toggleable__wrapper__right').html($html);

    } else if ($marker == 'toggleTwo') {
      $html = `
        <a href="#">
						<div class="toggleable__card">
							<div class="toggleable__card__left">
								<img src="images/archangels.jpg">
							</div>
							<div class="toggleable__card__right">
								<div class="toggleable__card__right__upper">
									<h5 class="toggleable__card__right__upper-title">Walking with The Archangels</h5>
									<p class="toggleable__card__right__upper-updated">Updated 9/2016</p>
								</div>
								<div class="toggleable__card__right__rating">
									<div class="toggleable__card__right__rating-star">
										<i class="fas fa-star"></i>
										3.9
									</div>
									<div class="toggleable__card__right__rating-subscriber">
										<i class="fas fa-user"></i>
										378
									</div>
								</div>
							</div>
							<i class="far fa-heart toggleable__card-heart">
							</i>
							<p class="toggleable__card-price">¥3,000</p>
						</div>
					</a>

					<a href="#">
						<div class="toggleable__card">
							<div class="toggleable__card__left">
								<img src="images/minister.jpg">
							</div>
							<div class="toggleable__card__right">
								<div class="toggleable__card__right__upper">
									<h5 class="toggleable__card__right__upper-title">Minister's Crash Course</h5>
									<p class="toggleable__card__right__upper-updated">Updated 5/2015</p>
								</div>
								<div class="toggleable__card__right__rating">
									<div class="toggleable__card__right__rating-star">
										<i class="fas fa-star"></i>
										4.9
									</div>
									<div class="toggleable__card__right__rating-subscriber">
										<i class="fas fa-user"></i>
										2,772
									</div>
								</div>
							</div>
							<i class="far fa-heart toggleable__card-heart">
							</i>
							<p class="toggleable__card-price">¥6,300</p>
						</div>
					</a>
      `
      $('.toggleable__wrapper__right').html($html);
    }
  });

	
	/////////// Linkbar-dropdown //////////
	$('.linkbar').hover(
		function () {
			$('.linkbar__dropdown').removeClass('inactive')
		}, function () {
			$('.linkbar__dropdown').addClass('inactive')
		}
	);


	$('#linkbarDevelopment').mouseenter(
		function() {
			$html = `
			<ul class="linkbar__dropdown">
				<li class="linkbar__dropdown-item">
					<a href="#" class="linkbar__dropdown-link">
						<i class="fas fa-code"></i>
						<p>Web Development</p>
					</a>
				</li>
				<li class="linkbar__dropdown-item">
					<a href="#" class="linkbar__dropdown-link">
						<i class="fas fa-mobile-alt"></i>
						<p>Mobile Apps</p>
					</a>
				</li>
				<li class="linkbar__dropdown-item">
					<a href="#" class="linkbar__dropdown-link">
						<i class="fas fa-file-word"></i>
						<p>Programming Languages</p>
					</a>
				</li>
				<li class="linkbar__dropdown-item">
					<a href="#" class="linkbar__dropdown-link">
						<i class="fas fa-gamepad"></i>
						<p>Game Development</p>
					</a>
				</li>
				<li class="linkbar__dropdown-item">
					<a href="#" class="linkbar__dropdown-link">
						<i class="fas fa-database"></i>
						<p>Databases</p>
					</a>
				</li>
			</ul>
			`
			$('.linkbar__dropdown-list').html($html)
		});


	$('#linkbarBusiness').mouseenter(
		function() {
			$html = `
			<ul class="linkbar__dropdown">
				<li class="linkbar__dropdown-item">
					<a href="#" class="linkbar__dropdown-link">
						<i class="fas fa-wallet"></i>
						<p>finance</p>
					</a>
				</li>
				<li class="linkbar__dropdown-item">
					<a href="#" class="linkbar__dropdown-link">
						<i class="far fa-address-card"></i>
						<p>Entrepreneurship</p>
					</a>
				</li>
				<li class="linkbar__dropdown-item">
					<a href="#" class="linkbar__dropdown-link">
						<i class="far fa-comments"></i>
						<p>Communications</p>
					</a>
				</li>
				<li class="linkbar__dropdown-item">
					<a href="#" class="linkbar__dropdown-link">
						<i class="fas fa-tasks"></i>
						<p>Management</p>
					</a>
				</li>
				<li class="linkbar__dropdown-item">
					<a href="#" class="linkbar__dropdown-link">
						<i class="fab fa-salesforce"></i>
						<p>Sales</p>
					</a>
				</li>
			</ul>
			`
			$('.linkbar__dropdown-list').html($html)
		});


	$('#linkbarIt').mouseenter(
		function() {
			$html = `
			<ul class="linkbar__dropdown">
				<li class="linkbar__dropdown-item">
					<a href="#" class="linkbar__dropdown-link">
						<i class="fas fa-stamp"></i>
						<p>IT certification</p>
					</a>
				</li>
				<li class="linkbar__dropdown-item">
					<a href="#" class="linkbar__dropdown-link">
						<i class="fas fa-network-wired"></i>
						<p>Network & Security</p>
					</a>
				</li>
				<li class="linkbar__dropdown-item">
					<a href="#" class="linkbar__dropdown-link">
						<i class="fas fa-memory"></i>
						<p>Hardware</p>
					</a>
				</li>
				<li class="linkbar__dropdown-item">
					<a href="#" class="linkbar__dropdown-link">
						<i class="fab fa-osi"></i>
						<p>Operating system</p>
					</a>
				</li>
				<li class="linkbar__dropdown-item">
					<a href="#" class="linkbar__dropdown-link">
						<i class="fas fa-feather"></i>
						<p>Other</p>
					</a>
				</li>
			</ul>
			`
			$('.linkbar__dropdown-list').html($html)
		});

	$('#linkbarOffice').mouseenter(
		function() {
			$html = `
			<ul class="linkbar__dropdown">
				<li class="linkbar__dropdown-item">
					<a href="#" class="linkbar__dropdown-link">
						<i class="fab fa-windows"></i>
						<p>Microsoft</p>
					</a>
				</li>
				<li class="linkbar__dropdown-item">
					<a href="#" class="linkbar__dropdown-link">
						<i class="fab fa-apple"></i>
						<p>Apple</p>
					</a>
				</li>
				<li class="linkbar__dropdown-item">
					<a href="#" class="linkbar__dropdown-link">
						<i class="fab fa-google"></i>
						<p>Google</p>
					</a>
				</li>
				<li class="linkbar__dropdown-item">
					<a href="#" class="linkbar__dropdown-link">
						<i class="fab fa-aws"></i>
						<p>AWS</p>
					</a>
				</li>
				<li class="linkbar__dropdown-item">
					<a href="#" class="linkbar__dropdown-link">
						<i class="fas fa-server"></i>
						<p>Oracle</p>
					</a>
				</li>
			</ul>
			`
			$('.linkbar__dropdown-list').html($html)
		});

	$('#linkbarPersonal').mouseenter(
		function() {
			$html = `
			<ul class="linkbar__dropdown">
				<li class="linkbar__dropdown-item">
					<a href="#" class="linkbar__dropdown-link">
						<i class="fas fa-user-md"></i>
						<p>Personal transformation</p>
					</a>
				</li>
				<li class="linkbar__dropdown-item">
					<a href="#" class="linkbar__dropdown-link">
						<i class="fas fa-funnel-dollar"></i>
						<p>Productivity</p>
					</a>
				</li>
				<li class="linkbar__dropdown-item">
					<a href="#" class="linkbar__dropdown-link">
						<i class="fab fa-font-awesome-alt"></i>
						<p>Leadership</p>
					</a>
				</li>
				<li class="linkbar__dropdown-item">
					<a href="#" class="linkbar__dropdown-link">
						<i class="fas fa-hand-holding-usd"></i>
						<p>Personal finance</p>
					</a>
				</li>
				<li class="linkbar__dropdown-item">
					<a href="#" class="linkbar__dropdown-link">
						<i class="fas fa-user-friends"></i>
						<p>Career debvelopment</p>
					</a>
				</li>
			</ul>
			`
			$('.linkbar__dropdown-list').html($html)
		});

	$('#linkbarDesign').mouseenter(
		function() {
			$html = `
			<ul class="linkbar__dropdown">
				<li class="linkbar__dropdown-item">
					<a href="#" class="linkbar__dropdown-link">
						<i class="far fa-object-group"></i>
						<p>Web Design</p>
					</a>
				</li>
				<li class="linkbar__dropdown-item">
					<a href="#" class="linkbar__dropdown-link">
						<i class="fas fa-palette"></i>
						<p>Graphic Design</p>
					</a>
				</li>
				<li class="linkbar__dropdown-item">
					<a href="#" class="linkbar__dropdown-link">
						<i class="fas fa-ruler-combined"></i>
						<p>Design tools</p>
					</a>
				</li>
				<li class="linkbar__dropdown-item">
					<a href="#" class="linkbar__dropdown-link">
						<i class="fas fa-icons"></i>
						<p>User experience</p>
					</a>
				</li>
				<li class="linkbar__dropdown-item">
					<a href="#" class="linkbar__dropdown-link">
						<i class="fas fa-ghost"></i>
						<p>Game Design</p>
					</a>
				</li>
			</ul>
			`
			$('.linkbar__dropdown-list').html($html)
		});

	$('#linkbarMarketing').mouseenter(
		function() {
			$html = `
			<ul class="linkbar__dropdown">
				<li class="linkbar__dropdown-item">
					<a href="#" class="linkbar__dropdown-link">
						<i class="fas fa-digital-tachograph"></i>
						<p>Degital marketing</p>
					</a>
				</li>
				<li class="linkbar__dropdown-item">
					<a href="#" class="linkbar__dropdown-link">
						<i class="fab fa-searchengin"></i>
						<p>SEO</p>
					</a>
				</li>
				<li class="linkbar__dropdown-item">
					<a href="#" class="linkbar__dropdown-link">
						<i class="fas fa-comments-dollar"></i>
						<p>Social media maketing</p>
					</a>
				</li>
				<li class="linkbar__dropdown-item">
					<a href="#" class="linkbar__dropdown-link">
						<i class="far fa-copyright"></i>
						<p>Branding</p>
					</a>
				</li>
				<li class="linkbar__dropdown-item">
					<a href="#" class="linkbar__dropdown-link">
						<i class="fas fa-landmark"></i>
						<p>Marketing fundamentals</p>
					</a>
				</li>
			</ul>
			`
			$('.linkbar__dropdown-list').html($html)
		});

	$('#linkbarHealth').mouseenter(
		function() {
			$html = `
			<ul class="linkbar__dropdown">
				<li class="linkbar__dropdown-item">
					<a href="#" class="linkbar__dropdown-link">
						<i class="fas fa-landmark"></i>
						<p>Fitness</p>
					</a>
				</li>
				<li class="linkbar__dropdown-item">
					<a href="#" class="linkbar__dropdown-link">
						<i class="fas fa-volleyball-ball"></i>
						<p>Sports</p>
					</a>
				</li>
				<li class="linkbar__dropdown-item">
					<a href="#" class="linkbar__dropdown-link">
						<i class="fas fa-assistive-listening-systems"></i>
						<p>Mental health</p>
					</a>
				</li>
				<li class="linkbar__dropdown-item">
					<a href="#" class="linkbar__dropdown-link">
						<i class="fas fa-journal-whills"></i>
						<p>Yoga</p>
					</a>
				</li>
				<li class="linkbar__dropdown-item">
					<a href="#" class="linkbar__dropdown-link">
						<i class="fas fa-carrot"></i>
						<p>Nutrition</p>
					</a>
				</li>
			</ul>
			`
			$('.linkbar__dropdown-list').html($html)
		});

	$('#linkbarMusic').mouseenter(
		function() {
			$html = `
			<ul class="linkbar__dropdown">
				<li class="linkbar__dropdown-item">
					<a href="#" class="linkbar__dropdown-link">
						<i class="fas fa-guitar"></i>
						<p>Instruments</p>
					</a>
				</li>
				<li class="linkbar__dropdown-item">
					<a href="#" class="linkbar__dropdown-link">
						<i class="fas fa-map-marked"></i>
						<p>Production</p>
					</a>
				</li>
				<li class="linkbar__dropdown-item">
					<a href="#" class="linkbar__dropdown-link">
						<i class="fas fa-microphone-alt"></i>
						<p>Vocal</p>
					</a>
				</li>
				<li class="linkbar__dropdown-item">
					<a href="#" class="linkbar__dropdown-link">
						<i class="fas fa-sign-language"></i>
						<p>Music fundamentals</p>
					</a>
				</li>
				<li class="linkbar__dropdown-item">
					<a href="#" class="linkbar__dropdown-link">
						<i class="fab fa-spotify"></i>
						<p>Music software</p>
					</a>
				</li>
			</ul>
			`
			$('.linkbar__dropdown-list').html($html)
		});











});

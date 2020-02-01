$(function() {


  // Toggleable menu
  $('#toggleOne, #toggleTwo' ).on('click', function() {
    $marker = $("input[name='toggleable']:checked").val();

    if ($marker == 'toggleOne') {
      html = `
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
      $('.toggleable__wrapper__right').html(html);

    } else if ($marker == 'toggleTwo') {
      html = `
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
      $('.toggleable__wrapper__right').html(html);
    }
  });

  


});

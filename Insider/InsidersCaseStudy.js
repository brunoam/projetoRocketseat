// Creating a new DIV
// Setting a variable using camelCase
var newDiv = document.createElement("div");

// Setting an ID to the new DIV
newDiv.id="popUp";

// Setting DIV position
newDiv.style.position="fixed";
newDiv.style.paddingRight="20px";
newDiv.style.bottom="0";
newDiv.style.right="0";

// Stylizing the DIV
newDiv.style.width="320px";
newDiv.style.height="330px";
newDiv.style.fontSize="16px";
newDiv.style.opacity="0.9";

// Appending the created DIV to HTML source body
document.body.appendChild(newDiv);

// Reusing the class 'product-single__info-wrapper' to preserve the identity
var htmlContent="<div style='border-style:solid hidden;border-Color:#051336;border-Radius:20px;padding-left:10px;background-color:white' class='product-single__info-wrapper'><meta itemprop='priceCurrency' content='SGD'><link itemprop='availability' href='http://schema.org/InStock'><div class='product-single__meta small--text-center'><h1 itemprop='name' class='product-single__title'>VANS SH-8 HI</h1><ul class='product-single__meta-list list--no-bullets list--inline'>    <li id='ProductSaleTag-product-template' class=''><div class='product-tag'>  Sale</div>    </li>    <li><span style='Color:#666;' id='ProductPrice-product-template' class='product-single__price' itemprop='price' content='99.95'>  $99.95</span>    </li>    <li>  <span class='visually-hidden'>Regular price</span>  <s id='ComparePrice-product-template' class='product-single__price product-single__price--compare'>    $129.95  </s></li>  </ul></div><hr><form method='post' action='/cart/add' id='AddToCartForm-product-template' accept-charset='UTF-8' class='product-form product-form--payment-button' enctype='multipart/form-data'><input type='hidden' name='form_type' value='product'><input type='hidden' name='utf8' value='✓'><div style='flex-basis:60px;'>  <label for='SingleOptionSelector-product-template-0'>Size</label>  <select style='width:50px;' class='single-option-selector single-option-selector-product-template product-form__input' id='SingleOptionSelector-0' data-name='Size' data-index='option1'>    <option value='4' selected='selected'>4</option>    <option value='5'>5</option>    <option value='6'>6</option>    <option value='7'>7</option>    <option value='8'>8</option>    <option value='9'>9</option>    <option value='10'>10</option>    <option value='11'>11</option>    <option value='12'>12</option>    <option value='14'>14</option></select></div>    <div style='flex-basis:110px;'>  <label for='SingleOptionSelector-product-template-1'>Color</label>  <select  style='width:100px;' class='single-option-selector single-option-selector-product-template product-form__input' id='SingleOptionSelector-1' data-name='Color' data-index='option2'>    <option value='black' selected='selected'>black</option></select></div>    <select name='id' id='ProductSelect-product-template' class='product-form__variants no-js'>    <option selected='selected' data-sku='VN-07-black-4' value='34820110680108'>4 / black - $99.95 SGD  </option>    <option data-sku='VN-07-black-5' value='34820110712876'>5 / black - $99.95 SGD  </option>    <option data-sku='VN-07-black-6' value='34820110745644'>6 / black - $99.95 SGD  </option>    <option data-sku='VN-07-black-7' value='34820110778412' disabled='disabled'>7 / black - Sold Out  </option>    <option data-sku='VN-07-black-8' value='34820110811180'>8 / black - $99.95 SGD  </option>    <option data-sku='VN-07-black-9' value='34820110843948'>9 / black - $99.95 SGD  </option>    <option data-sku='VN-07-black-10' value='34820110876716'>10 / black - $99.95 SGD  </option>    <option data-sku='VN-07-black-11' value='34820110909484'>11 / black - $99.95 SGD  </option>    <option data-sku='VN-07-black-12' value='34820110942252'>12 / black - $99.95 SGD  </option>    <option data-sku='VN-07-black-14' value='34820110975020'>14 / black - $99.95 SGD  </option></select>  <div style='width:110px'>    <label for='Quantity'>Quantity</label>    <div class='js-qty'><input type='text' value='1' id='Quantity' name='quantity' pattern='[0-9]*' data-line='' class='js-qty__input' aria-live='polite'><button type='button' class='js-qty__adjust js-qty__adjust--minus' aria-label='Reduce item quantity by one'>  <svg aria-hidden='true' focusable='false' role='presentation' class='icon icon--wide icon-minus' viewBox='0 0 22 3'><path fill='#000' d='M21.5.5v2H.5v-2z' fill-rule='evenodd'></path></svg>  <span class='icon__fallback-text'>−</span></button><button type='button' class='js-qty__adjust js-qty__adjust--plus' aria-label='Increase item quantity by one'>  <svg aria-hidden='true' focusable='false' role='presentation' class='icon icon-plus' viewBox='0 0 22 21'><path d='M12 11.5h9.5v-2H12V0h-2v9.5H.5v2H10V21h2v-9.5z' fill='#000' fill-rule='evenodd'></path></svg>  <span class='icon__fallback-text'>+</span></button></div>  </div>  <div class='product-form__item product-form__item--submit'>    <button type='submit' name='add' id='AddToCart-product-template' class='btn btn--full product-form__cart-submit btn--secondary-accent'><span id='AddToCartText-product-template'>Add to Cart  </span>    </button></div><input type='hidden' name='product-id' value='5445744361516'><input type='hidden' name='section-id' value='product-template'></form></div>";

// Setting a variable to the element "popUp"
var popUp = document.getElementById("popUp");

// setting created DIV to the "htmlContent"
popUp.innerHTML=htmlContent;
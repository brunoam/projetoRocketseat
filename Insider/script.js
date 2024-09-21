$(document).ready(function () {
  // Extract product details from the page
  var productName = $("h1.product-title").text();
  var productPrice = $(".price-item.price-item--regular").text();
  var productSize = $("select#ProductSelect option:selected").text();
  var productColor = $(".color-variant span").text(); // Adjust selector based on the actual HTML
  var productQuantity = $("input#Quantity").val();

  // Populate the pop-up with product details
  $("#popup-product-name").text(productName);
  $("#popup-product-price").text(productPrice);
  $("#popup-product-size").text(productSize);
  $("#popup-product-color").text(productColor);
  $("#popup-product-quantity").text(productQuantity);

  // Show the pop-up
  $("#product-popup").fadeIn();

  // Update quantity when changed on the page
  $("input#Quantity").on("change", function () {
    $("#popup-product-quantity").text($(this).val());
  });

  // Add to Cart button functionality
  $("#popup-add-to-cart").on("click", function () {
    $("form.product-form").submit(); // Simulate form submission
  });

  // Update size and color on change
  $("select#ProductSelect").on("change", function () {
    $("#popup-product-size").text($(this).find("option:selected").text());
  });
  $(".color-variant span").on("click", function () {
    $("#popup-product-color").text($(this).text());
  });
});

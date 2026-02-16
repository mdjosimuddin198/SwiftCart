const showDetails = async (product) => {
  modalContent.innerHTML = `
    <img src="${product.image}" 
         class="h-40 mx-auto object-contain mb-4"/>

    <h3 class="font-bold text-lg mb-2">
      ${product.title}
    </h3>

    <p class="text-sm text-gray-600 mb-3">
      ${product.description}
    </p>

    <p class="font-bold text-xl text-primary">
      $${product.price}
    </p>

    <div class="modal-action">
      <form method="dialog">
        <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"><i class="fa-solid fa-x"></i></button>
         <button onclick="addToCart(${product.id})"  class="btn btn-primary btn-sm flex-1">
            <a class="cursor-pointer"
              ><i class="fa-solid fa-cart-shopping"></i
            ></a>
            Add to Cart
          </button>
      </form>
    </div>
     
    
  `;

  modal.showModal();
};

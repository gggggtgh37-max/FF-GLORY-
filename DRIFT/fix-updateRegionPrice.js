// ADD THIS FUNCTION TO client.html (after line 2409, before populateRegionTierInfo)
// Insert right after the closing brace of populateRegionSelect function

function updateRegionPrice() {
    const select = document.getElementById('region-select');
    if (!select || !select.value) return;

    // Get the currently selected option
    const selectedOption = select.options[select.selectedIndex];
    if (!selectedOption) return;

    // Get tier from the option's dataset
    const tier = selectedOption.dataset.tier; // 'basic' or 'premium'

    // Update the cost display
    const creditCostEl = document.getElementById('region-credit-cost');
    const usdPriceEl = document.getElementById('region-usd-price');

    if (creditCostEl) {
        const creditType = tier === 'premium' ? 'Premium' : 'Basic';
        creditCostEl.textContent = `1 ${creditType} credit`;
    }

    if (usdPriceEl) {
        const price = tier === 'premium' ? creditPrices.premium : creditPrices.basic;
        usdPriceEl.textContent = '$' + price.toFixed(2);
    }
}



 const appState = {};
      
      const formatAsMoney = (amount, buyerCountry) => {
        const country = countries.find(c => c.country === buyerCountry);
        const {code, currency} = country;
        if (code && currency) return amount.toLocaleString(code, {style: "currency", currency});
        return amount.toLocaleString("en-US", {style: "currency", currency:"USD"});
      };
      
      // flagIfInvalid function
      const flagIfInvalid = (field, isValid) => {
        isValid ? field.classList.add("is-valid"): field.classLiss.remove ("is-invalid")
      };
        
      // expiryDateFormatIsValid function
      const expiryDateFormatIsValid = (target) => {
      };
      
      const detectCardType = ({target}) => {};
      
      // validate card expiry date
      const validateCardExpiryDate = ({target}) => {
        const date_now = new Date;
        const spliter = value.split("/");
        const validFormat = expiryDateFormatIsValid (target.value);
        
      };
      
      // 
      const validateCardHolderName = ({target}) => {};
      const uiCanInteract = () => {};
      const displayCartTotal = ({results}) => {
        const {results} = results;
        const [data] = results;
        const{itemsInCart, buyerCountry} = data;
      
      appState.items = itemsInCart;
      appState.country = buyerCountry;
      appState.bill = itemsInCart.reduce((result, item) => result = item.price * item.qty, 0);
      
      appState.billFormated = formatAsMoney (appState.bill, appState.country);
      databill.textContent = appState.billFormated;
      uiCanInteract();
        
      };
      const fetchBill = () => {
        const api = "https://randomapi.com/api/006b08a801d82d0c9824dcfdfdfa3b3c"
        fetch(api)
        .then((response) => response.json ())
        .then(data => displayCartTotal(data))
        .catch(error => console.log(error));
      };
      
      
      
      
      const supportedCards = {
        visa, mastercard
      };
      
      const countries = [
        {
          code: "US",
          currency: "USD",
          country: 'United States'
        },
        {
          code: "NG",
          currency: "NGN",
          country: 'Nigeria'
        },
        {
          code: 'KE',
          currency: 'KES',
          country: 'Kenya'
        },
        {
          code: 'UG',
          currency: 'UGX',
          country: 'Uganda'
        },
        {
          code: 'RW',
          currency: 'RWF',
          country: 'Rwanda'
        },
        {
          code: 'TZ',
          currency: 'TZS',
          country: 'Tanzania'
        },
        {
          code: 'ZA',
          currency: 'ZAR',
          country: 'South Africa'
        },
        {
          code: 'CM',
          currency: 'XAF',
          country: 'Cameroon'
        },
        {
          code: 'GH',
          currency: 'GHS',
          country: 'Ghana'
        }
      ];
      
      const startApp = () => {
        fetchBill();
      };
      
      
      startApp(); 
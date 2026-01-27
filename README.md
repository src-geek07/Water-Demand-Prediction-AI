# Water Demand Prediction System

## Live Site : 
## 📁 Files Included

This project contains 3 files:

1. **index.html** - The main HTML file with the website structure
2. **style.css** - The CSS file with all the styling and colors
3. **script.js** - The JavaScript file with the AI prediction logic


**How the AI works:**
```javascript
// It multiplies factors together:
totalDemand = peopleUse × temperature × rainfall × season × festival + industry
```

## 🤖 How the AI Prediction Works

The system uses simple math to predict water demand:

1. **Base Calculation**: Population × 150 liters per person
2. **Temperature Effect**: Hot weather = More water (+20% to +50%)
3. **Rainfall Effect**: Rain = Less water (-10% to -20%)
4. **Season Effect**: Summer = +30%, Winter = -15%
5. **Day Type**: Weekend = -10%, Holiday = -20%
6. **Festival**: Special events = +15%
7. **Industry**: Factories use extra water based on activity level

## 📊 Features

- ✅ Predict water demand for any date
- ✅ Consider weather conditions
- ✅ Account for festivals and events
- ✅ Track industrial usage
- ✅ See 7-day forecast
- ✅ View prediction history
- ✅ Get smart alerts (high demand, heat waves, etc.)
- ✅ Confidence rating for predictions

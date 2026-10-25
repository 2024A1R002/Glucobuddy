
          <div className="card">

            <h3>📸 Identify Food</h3>

            <p>
              Upload a photo of your food to identify it.
            </p>

            <input
              type="file"
              accept="image/*"
              onChange={(event) => {
                setFoodImage(event.target.files[0])
                setFoodPredictions([])
                setSelectedFood(null)
              }}
            />

            <button
              onClick={identifyFood}
              disabled={!foodImage || identifyingFood}
            >
              {identifyingFood
                ? 'Identifying...'
                : 'Identify Food'}
            </button>

            {/* Image preview */}
            {foodImage && (
              <div>
                <p>
                  Selected:{' '}
                  <strong>{foodImage.name}</strong>
                </p>

                <img
                  src={URL.createObjectURL(foodImage)}
                  alt="Selected food"
                  style={{
                    width: '100%',
                    maxHeight: '200px',
                    objectFit: 'cover',
                    borderRadius: '10px',
                    marginTop: '10px',
                  }}
                />
              </div>
            )}

            {/* AI predictions */}
            {foodPredictions.length > 0 && (
              <div>
                <h4>AI Food Predictions</h4>

                {foodPredictions.map((prediction, index) => (
                  <div key={index} style={{ marginBottom: '12px' }}>

                    <p>
                      <strong>{prediction.food}</strong>
                      {' — '}
                      {prediction.confidence}%
                    </p>

                    <button
                      onClick={() => selectFood(prediction)}
                    >
                      Use this food
                    </button>

                  </div>
                ))}
              </div>
            )}

            {/* Selected food nutrition */}
            {selectedFood && (
              <div>
                <h4>Selected Food</h4>

                <p>
                  <strong>{selectedFood.name}</strong>
                </p>

                <p>
                  Carbohydrates:{' '}
                  {selectedFood.carbohydrates} g
                </p>

                <p>
                  Protein:{' '}
                  {selectedFood.protein} g
                </p>

                <p>
                  Fiber:{' '}
                  {selectedFood.fiber} g
                </p>

                <p>
                  Calories:{' '}
                  {selectedFood.calories} kcal
                </p>
              </div>
            )}

          </div>


          {/* ========================= */}
          {/* RECORD MEAL */}
          {/* ========================= */}

          <div className="card">

            <h3>🍽️ Record Meal</h3>

            <p>
              Add the food you ate and its quantity.
            </p>

            <button
              onClick={() => setShowMealForm(true)}
            >
              Record Meal
            </button>

            {showMealForm && (
              <form onSubmit={recordMeal}>

                <label>Food</label>

                <select
                  value={foodId}
                  onChange={(event) =>
                    setFoodId(event.target.value)
                  }
                  required
                >

                  <option value="">
                    Select a food
                  </option>

                  {foods.map((food) => (
                    <option
                      key={food.id}
                      value={food.id}
                    >
                      {food.name}
                    </option>
                  ))}

                </select>


                <label>Quantity</label>

                <input
                  type="number"

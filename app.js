// 100天運動大計劃 - JavaScript Application Logic

/**
 * @class SeniorFitnessApp
 * @description Main class for the Senior Fitness App. Manages state, data, and UI.
 */
class SeniorFitnessApp {
  /**
   * @constructor
   * @description Initializes the application's state and data.
   */
  constructor() {
    // --- STATE VARIABLES ---
    /** @type {number} - The current day in the 100-day program. */
    this.currentDay = 1;
    /** @type {Set<number>} - A set of completed day numbers. */
    this.completedDays = new Set();
    /** @type {Set<number>} - A set of completed exercise indices for the current day. */
    this.currentExerciseCompletion = new Set();
    /** @type {?number} - Interval ID for the timer. */
    this.timerInterval = null;
    /** @type {number} - Total seconds for the timer (15 minutes). */
    this.timerSeconds = 15 * 60;
    /** @type {boolean} - Flag indicating if the timer is currently running. */
    this.timerRunning = false;

    // --- APPLICATION DATA ---
    /** @type {Array<object>} - Exercise phases and their details. */
    this.phases = [
      {
        phase: 1,
        days: "1-10",
        title: "建立基礎期",
        focus: "適應運動習慣",
        exercises: [
          {
            name: "原地踏步",
            duration: "1-2分鐘",
            intensity: "輕鬆",
            instructions: "坐著或站著輕鬆踏步，保持自然呼吸",
          },
          {
            name: "坐立運動",
            reps: "3-5次",
            intensity: "慢慢做",
            instructions: "從椅子慢慢站起，再慢慢坐下，重複動作",
          },
          {
            name: "手臂畫圈",
            reps: "5次每方向",
            intensity: "輕柔",
            instructions: "雙臂向前和向後慢慢畫圈，動作要輕柔",
          },
          {
            name: "深呼吸",
            reps: "3次",
            intensity: "放鬆",
            instructions: "慢慢深吸氣，停留3秒，再慢慢呼氣",
          },
          {
            name: "頸部伸展",
            duration: "10秒每邊",
            intensity: "溫和",
            instructions: "輕柔地左右轉動頭部，感受頸部伸展",
          },
        ],
        total_time: "10-15分鐘",
        benefits: "開始改善血液循環，建立運動習慣",
      },
      {
        phase: 2,
        days: "11-20",
        title: "溫和進步期",
        focus: "增加運動時間",
        exercises: [
          {
            name: "原地踏步",
            duration: "2-3分鐘",
            intensity: "輕鬆",
            instructions: "踏步時可以輕輕擺動手臂，保持節奏",
          },
          {
            name: "坐立運動",
            reps: "5-8次",
            intensity: "穩定節奏",
            instructions: "動作要平穩，可以扶著椅子扶手",
          },
          {
            name: "手臂畫圈",
            reps: "8次每方向",
            intensity: "輕柔",
            instructions: "畫圈幅度可以稍微大一些",
          },
          {
            name: "牆壁俯臥撑",
            reps: "3次",
            intensity: "輕鬆",
            instructions: "面對牆壁，雙手撐牆做輕鬆的推牆動作",
          },
          {
            name: "腳跟提升",
            reps: "5次",
            intensity: "慢慢做",
            instructions: "可以扶著椅子或牆壁保持平衡",
          },
          {
            name: "深呼吸",
            reps: "5次",
            intensity: "放鬆",
            instructions: "配合手臂輕輕上下擺動",
          },
          {
            name: "頸部伸展",
            duration: "15秒每邊",
            intensity: "溫和",
            instructions: "動作更加完整，但仍要溫和",
          },
        ],
        total_time: "12-15分鐘",
        benefits: "肌肉力量開始增強，姿勢改善",
      },
      {
        phase: 3,
        days: "21-30",
        title: "力量建立期",
        focus: "強化肌肉力量",
        exercises: [
          {
            name: "原地踏步",
            duration: "3-4分鐘",
            intensity: "中等",
            instructions: "可以適度提高膝蓋，增加運動強度",
          },
          {
            name: "坐立運動",
            reps: "8-10次",
            intensity: "穩定",
            instructions: "動作要完整，從坐到完全站立",
          },
          {
            name: "手臂畫圈",
            reps: "10次每方向",
            intensity: "完全幅度",
            instructions: "畫圈動作要完整，感受肩膀活動",
          },
          {
            name: "牆壁俯臥撑",
            reps: "5次",
            intensity: "控制動作",
            instructions: "動作要慢，控制推和拉的過程",
          },
          {
            name: "腳跟提升",
            reps: "8次",
            intensity: "慢慢做",
            instructions: "盡量提高腳跟，感受小腿肌肉收縮",
          },
          {
            name: "簡易平衡練習",
            duration: "30秒",
            intensity: "扶穩東西",
            instructions: "單腳輕輕離地，扶穩椅子保持平衡",
          },
          {
            name: "深呼吸",
            reps: "5次",
            intensity: "深層放鬆",
            instructions: "呼吸要深入，配合全身放鬆",
          },
        ],
        total_time: "15分鐘",
        benefits: "力量明顯提升，平衡感改善，精神狀態更好",
      },
    ];

    /** @type {Array<object>} - Milestones for the 100-day program. */
    this.milestones = [
      {
        day: 10,
        title: "首個里程碑",
        message: "恭喜！您已經堅持10天了！",
        outcome: "血液循環改善，精神狀態更好",
      },
      {
        day: 30,
        title: "一個月成就",
        message: "太棒了！一個月的堅持讓您更健康！",
        outcome: "肌肉力量提升，姿勢改善",
      },
      {
        day: 60,
        title: "兩個月突破",
        message: "驚人的毅力！您的改變有目共睹！",
        outcome: "體力明顯增強，外觀更精神",
      },
      {
        day: 100,
        title: "百日圓滿",
        message: "恭喜完成100天挑戰！您已經脫胎換骨！",
        outcome: "整體健康改善，看起來年輕有活力",
      },
    ];

    /** @type {Array<string>} - A collection of motivational messages. */
    this.motivationalMessages = [
      "今天是美好的開始！",
      "每一天的堅持都讓您更健康！",
      "您的努力正在改變您的生活！",
      "堅持就是勝利，加油！",
      "今天的運動會讓您感覺更棒！",
      "您正在變得越來越年輕！",
      "健康的身體是最好的財富！",
      "每一次運動都是對自己的投資！",
    ];
  }

  /**
   * @method init
   * @description Initializes the application by loading data, updating the UI, and setting up event listeners.
   */
  init() {
    console.log("Initializing app...");
    this.loadData();
    this.updateDashboard();
    this.setupEventListeners();
    console.log("App initialized successfully");
  }

  /**
   * @method setupEventListeners
   * @description Sets up all the necessary event listeners for the application.
   */
  setupEventListeners() {
    console.log("Setting up event listeners...");

    // Use a helper function to add event listeners safely.
    this.addEventListenerSafely("start-exercise-btn", "click", () => {
      console.log("Start exercise button clicked");
      this.showExerciseView();
    });

    this.addEventListenerSafely("view-progress-btn", "click", () => {
      console.log("View progress button clicked");
      this.showProgressView();
    });

    this.addEventListenerSafely("back-to-dashboard", "click", () => {
      console.log("Back to dashboard clicked");
      this.showDashboard();
    });

    this.addEventListenerSafely("back-from-progress", "click", () => {
      console.log("Back from progress clicked");
      this.showDashboard();
    });

    this.addEventListenerSafely("complete-workout-btn", "click", () => {
      console.log("Complete workout clicked");
      this.completeWorkout();
    });

    this.addEventListenerSafely("timer-btn", "click", () => {
      console.log("Timer button clicked");
      this.toggleTimer();
    });

    this.addEventListenerSafely("close-modal", "click", () => {
      this.closeModal();
    });

    this.addEventListenerSafely("close-exercise-details", "click", () => {
      this.closeExerciseDetails();
    });

    console.log("Event listeners setup complete");
  }

  /**
   * @method addEventListenerSafely
   * @description A helper function to add an event listener to an element, with a check to ensure the element exists.
   * @param {string} elementId - The ID of the DOM element.
   * @param {string} event - The event to listen for (e.g., 'click').
   * @param {function} handler - The function to execute when the event occurs.
   */
  addEventListenerSafely(elementId, event, handler) {
    const element = document.getElementById(elementId);
    if (element) {
      element.addEventListener(event, handler);
      console.log(`Event listener added for ${elementId}`);
    } else {
      console.warn(`Element not found: ${elementId}`);
    }
  }

  /**
   * @method getCurrentPhase
   * @description Determines the current exercise phase based on the current day.
   * @returns {object} The current phase object.
   */
  getCurrentPhase() {
    if (this.currentDay <= 10) return this.phases;
    if (this.currentDay <= 20) return this.phases;
    return this.phases;
  }

  /**
   * @method updateDashboard
   * @description Updates the main dashboard with the latest data (current day, phase, progress, etc.).
   */
  updateDashboard() {
    console.log("Updating dashboard...");
    const currentPhase = this.getCurrentPhase();

    // Update dashboard text elements
    this.updateElementText("current-day", this.currentDay);
    this.updateElementText(
      "current-phase",
      `${currentPhase.title} (第${currentPhase.phase}階段)`
    );

    // Update the progress bar
    const progress = (this.currentDay / 100) * 100;
    const progressFill = document.getElementById("progress-fill");
    if (progressFill) {
      progressFill.style.width = `${progress}%`;
    }
    this.updateElementText("progress-text", `${Math.round(progress)}%`);

    // Update the next milestone display
    const nextMilestone = this.milestones.find((m) => m.day > this.currentDay);
    this.updateElementText(
      "next-milestone",
      nextMilestone ? `第${nextMilestone.day}天` : "已完成所有里程碑！"
    );

    // Display a random motivational message
    const randomMessage =
      this.motivationalMessages[
        Math.floor(Math.random() * this.motivationalMessages.length)
      ];
    this.updateElementText("daily-motivation", randomMessage);

    console.log("Dashboard updated");
  }

  /**
   * @method updateElementText
   * @description A helper function to update the text content of a DOM element.
   * @param {string} elementId - The ID of the DOM element.
   * @param {string} text - The text to set.
   */
  updateElementText(elementId, text) {
    const element = document.getElementById(elementId);
    if (element) {
      element.textContent = text;
    } else {
      console.warn(`Element not found: ${elementId}`);
    }
  }

  /**
   * @method showView
   * @description Hides all main views and shows the specified view.
   * @param {string} viewId - The ID of the view to show ('dashboard', 'exercise-view', 'progress-view').
   */
  showView(viewId) {
    console.log(`Showing view: ${viewId}`);

    // Hide all views
    const views = ["dashboard", "exercise-view", "progress-view"];
    views.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        element.style.display = "none";
      }
    });

    // Show the target view
    const targetView = document.getElementById(viewId);
    if (targetView) {
      targetView.style.display = "flex";
    } else {
      console.error(`View not found: ${viewId}`);
    }
  }

  /**
   * @method showDashboard
   * @description A shortcut method to show the main dashboard view.
   */
  showDashboard() {
    console.log("Showing dashboard");
    this.showView("dashboard");
  }

  /**
   * @method showExerciseView
   * @description Shows the exercise view and populates it with the current day's exercises.
   */
  showExerciseView() {
    console.log("Showing exercise view");
    this.showView("exercise-view");

    const currentPhase = this.getCurrentPhase();

    // Update the header with phase information
    this.updateElementText(
      "exercise-phase-title",
      `第${currentPhase.phase}階段：${currentPhase.title}`
    );
    this.updateElementText("exercise-focus", currentPhase.focus);

    // Reset completion state for the new session
    this.currentExerciseCompletion.clear();

    // Render the list of exercises for the current phase
    this.renderExerciseList(currentPhase.exercises);

    // Reset the timer
    this.resetTimer();
  }

  /**
   * @method renderExerciseList
   * @description Renders the list of exercises for the current phase into the UI.
   * @param {Array<object>} exercises - An array of exercise objects.
   */
  renderExerciseList(exercises) {
    console.log("Rendering exercise list...");
    const exerciseList = document.getElementById("exercise-list");
    if (!exerciseList) {
      console.error("Exercise list element not found");
      return;
    }

    exerciseList.innerHTML = ""; // Clear previous list

    exercises.forEach((exercise, index) => {
      const exerciseItem = document.createElement("div");
      exerciseItem.className = "exercise-item";
      exerciseItem.innerHTML = `
                <div class="exercise-checkbox" data-index="${index}">
                    ${this.currentExerciseCompletion.has(index) ? "✓" : ""}
                </div>
                <div class="exercise-info">
                    <div class="exercise-name">${exercise.name}</div>
                    <div class="exercise-details">
                        <span>強度: ${exercise.intensity}</span>
                        <span>${exercise.reps || exercise.duration}</span>
                    </div>
                </div>
            `;

      // Click listener to show exercise details
      exerciseItem.addEventListener("click", () =>
        this.showExerciseDetails(exercise)
      );

      // Click listener for the checkbox
      const checkbox = exerciseItem.querySelector(".exercise-checkbox");
      if (checkbox) {
        checkbox.addEventListener("click", (e) => {
          e.stopPropagation(); // Prevent triggering the item click
          this.toggleExerciseCompletion(index);
        });
      }

      exerciseList.appendChild(exerciseItem);
    });

    this.updateCompleteButton();
    console.log(`Rendered ${exercises.length} exercises`);
  }

  /**
   * @method toggleExerciseCompletion
   * @description Toggles the completion status of an exercise.
   * @param {number} index - The index of the exercise to toggle.
   */
  toggleExerciseCompletion(index) {
    console.log(`Toggling exercise completion for index: ${index}`);
    const checkbox = document.querySelector(`[data-index="${index}"]`);

    if (this.currentExerciseCompletion.has(index)) {
      this.currentExerciseCompletion.delete(index);
      if (checkbox) {
        checkbox.textContent = "";
        checkbox.classList.remove("checked");
      }
    } else {
      this.currentExerciseCompletion.add(index);
      if (checkbox) {
        checkbox.textContent = "✓";
        checkbox.classList.add("checked");
      }
    }

    this.updateCompleteButton();
  }

  /**
   * @method updateCompleteButton
   * @description Enables or disables the "Complete Workout" button based on whether all exercises are checked.
   */
  updateCompleteButton() {
    const currentPhase = this.getCurrentPhase();
    const completeBtn = document.getElementById("complete-workout-btn");

    if (completeBtn) {
      const allCompleted =
        this.currentExerciseCompletion.size === currentPhase.exercises.length;
      completeBtn.disabled = !allCompleted;
      console.log(`Complete button enabled: ${allCompleted}`);
    }
  }

  /**
   * @method showExerciseDetails
   * @description Shows a modal with detailed instructions for a specific exercise.
   * @param {object} exercise - The exercise object to display.
   */
  showExerciseDetails(exercise) {
    console.log(`Showing exercise details for: ${exercise.name}`);
    this.updateElementText("exercise-detail-name", exercise.name);
    this.updateElementText("exercise-intensity", exercise.intensity);
    this.updateElementText(
      "exercise-duration",
      exercise.reps || exercise.duration
    );
    this.updateElementText("exercise-instructions", exercise.instructions);

    const modal = document.getElementById("exercise-details-modal");
    if (modal) {
      modal.style.display = "flex";
    }
  }

  /**
   * @method closeExerciseDetails
   * @description Closes the exercise details modal.
   */
  closeExerciseDetails() {
    const modal = document.getElementById("exercise-details-modal");
    if (modal) {
      modal.style.display = "none";
    }
  }

  /**
   * @method toggleTimer
   * @description Starts or pauses the workout timer.
   */
  toggleTimer() {
    console.log("Toggling timer");
    const timerBtn = document.getElementById("timer-btn");

    if (this.timerRunning) {
      this.pauseTimer();
      if (timerBtn) timerBtn.textContent = "繼續計時";
    } else {
      this.startTimer();
      if (timerBtn) timerBtn.textContent = "暫停計時";
    }
  }

  /**
   * @method startTimer
   * @description Starts the timer interval.
   */
  startTimer() {
    console.log("Starting timer");
    this.timerRunning = true;
    this.timerInterval = setInterval(() => {
      this.timerSeconds--;
      this.updateTimerDisplay();

      if (this.timerSeconds <= 0) {
        this.completeTimer();
      }
    }, 1000);
  }

  /**
   * @method pauseTimer
   * @description Pauses the timer interval.
   */
  pauseTimer() {
    console.log("Pausing timer");
    this.timerRunning = false;
    clearInterval(this.timerInterval);
  }

  /**
   * @method resetTimer
   * @description Resets the timer to its initial state.
   */
  resetTimer() {
    console.log("Resetting timer");
    this.pauseTimer(); // Stop any existing interval
    this.timerSeconds = 15 * 60;
    this.updateTimerDisplay();

    const timerBtn = document.getElementById("timer-btn");
    if (timerBtn) {
      timerBtn.textContent = "開始計時";
      timerBtn.disabled = false;
    }
  }

  /**
   * @method completeTimer
   * @description Handles the timer completion event.
   */
  completeTimer() {
    console.log("Timer completed");
    this.pauseTimer();
    const timerBtn = document.getElementById("timer-btn");
    if (timerBtn) {
      timerBtn.textContent = "時間完成！";
      timerBtn.disabled = true;
    }
  }

  /**
   * @method updateTimerDisplay
   * @description Updates the timer display in the UI.
   */
  updateTimerDisplay() {
    const minutes = Math.floor(this.timerSeconds / 60);
    const seconds = this.timerSeconds % 60;
    const timeString = `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
    this.updateElementText("timer", timeString);
  }

  /**
   * @method completeWorkout
   * @description Handles the logic for completing a day's workout.
   */
  completeWorkout() {
    console.log("Completing workout");

    // Mark the current day as completed
    this.completedDays.add(this.currentDay);

    // Check if a milestone has been reached
    const milestone = this.milestones.find((m) => m.day === this.currentDay);

    // Show the success modal
    this.updateElementText(
      "success-message",
      "您已完成今日運動！繼續保持這個好習慣！"
    );

    const milestoneAchievement = document.getElementById(
      "milestone-achievement"
    );
    if (milestone && milestoneAchievement) {
      milestoneAchievement.style.display = "block";
      this.updateElementText("milestone-message", milestone.message);
      this.updateElementText("milestone-outcome", milestone.outcome);
    } else if (milestoneAchievement) {
      milestoneAchievement.style.display = "none";
    }

    const modal = document.getElementById("success-modal");
    if (modal) {
      modal.style.display = "flex";
    }

    // Advance to the next day
    this.currentDay = Math.min(this.currentDay + 1, 100);
    this.saveData();
  }

  /**
   * @method closeModal
   * @description Closes the success modal and returns to the dashboard.
   */
  closeModal() {
    const modal = document.getElementById("success-modal");
    if (modal) {
      modal.style.display = "none";
    }
    this.showDashboard();
    this.updateDashboard();
  }

  /**
   * @method showProgressView
   * @description Shows the progress view and renders its components.
   */
  showProgressView() {
    console.log("Showing progress view");
    this.showView("progress-view");

    // Render the progress calendar, milestones, and streak info
    this.renderCalendar();
    this.renderMilestones();
    this.updateStreakInfo();
  }

  /**
   * @method renderCalendar
   * @description Renders the 100-day progress calendar.
   */
  renderCalendar() {
    console.log("Rendering calendar");
    const calendarGrid = document.getElementById("calendar-grid");
    if (!calendarGrid) return;

    calendarGrid.innerHTML = "";

    for (let day = 1; day <= 100; day++) {
      const dayElement = document.createElement("div");
      dayElement.className = "calendar-day";
      dayElement.textContent = day;

      if (this.completedDays.has(day)) {
        dayElement.classList.add("completed");
      } else if (day === this.currentDay) {
        dayElement.classList.add("current");
      } else if (day > this.currentDay) {
        dayElement.classList.add("upcoming");
      }

      calendarGrid.appendChild(dayElement);
    }
  }

  /**
   * @method renderMilestones
   * @description Renders the list of milestones and their achievement status.
   */
  renderMilestones() {
    console.log("Rendering milestones");
    const milestoneList = document.getElementById("milestone-list");
    if (!milestoneList) return;

    milestoneList.innerHTML = "";

    this.milestones.forEach((milestone) => {
      const milestoneItem = document.createElement("div");
      milestoneItem.className = "milestone-item";

      const isAchieved =
        this.completedDays.has(milestone.day) ||
        this.currentDay > milestone.day;
      if (isAchieved) {
        milestoneItem.classList.add("achieved");
      }

      milestoneItem.innerHTML = `
                <div class="milestone-badge ${
                  isAchieved ? "achieved" : "upcoming"
                }">
                    ${milestone.day}
                </div>
                <div class="milestone-info">
                    <h4>${milestone.title}</h4>
                    <p>${milestone.message}</p>
                </div>
            `;

      milestoneList.appendChild(milestoneItem);
    });
  }

  /**
   * @method updateStreakInfo
   * @description Calculates and displays the current workout streak and total completed days.
   */
  updateStreakInfo() {
    console.log("Updating streak info");
    // Calculate the current streak by checking previous days
    let streak = 0;
    for (let day = this.currentDay - 1; day >= 1; day--) {
      if (this.completedDays.has(day)) {
        streak++;
      } else {
        break;
      }
    }

    this.updateElementText("streak-days", streak);
    this.updateElementText("completed-days", this.completedDays.size);
  }

  /**
   * @method saveData
   * @description Saves the current application state to localStorage.
   */
  saveData() {
    const data = {
      currentDay: this.currentDay,
      completedDays: Array.from(this.completedDays),
    };
    localStorage.setItem("seniorFitnessData", JSON.stringify(data));
    console.log("Data saved to localStorage");
  }

  /**
   * @method loadData
   * @description Loads application state from localStorage.
   */
  loadData() {
    const data = localStorage.getItem("seniorFitnessData");
    if (data) {
      const parsedData = JSON.parse(data);
      this.currentDay = parsedData.currentDay;
      this.completedDays = new Set(parsedData.completedDays);
      console.log("Data loaded from localStorage");
    }
  }

  /**
   * @method resetData
   * @description Resets all application data to its initial state.
   */
  resetData() {
    localStorage.removeItem("seniorFitnessData");
    this.currentDay = 1;
    this.completedDays = new Set();
    console.log("Data reset");
    this.updateDashboard();
  }
}

// --- APP INITIALIZATION ---
/**
 * @description This event listener waits for the DOM to be fully loaded before initializing the app.
 */
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM content loaded, initializing app");
  try {
    window.app = new SeniorFitnessApp();
    window.app.init();
  } catch (error) {
    console.error("Failed to initialize app:", error);
  }
});

// 100天運動大計劃 - JavaScript Application Logic

class SeniorFitnessApp {
  constructor() {
    this.currentDay = 1;
    this.completedDays = new Set();
    this.currentExerciseCompletion = new Set();
    this.timerInterval = null;
    this.timerSeconds = 15 * 60; // 15 minutes in seconds
    this.timerRunning = false;

    // Application data
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

  init() {
    console.log("Initializing app...");
    this.loadData();
    this.updateDashboard();
    this.setupEventListeners();
    console.log("App initialized successfully");
  }

  setupEventListeners() {
    console.log("Setting up event listeners...");

    // Use more robust event listener setup with error handling
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

  addEventListenerSafely(elementId, event, handler) {
    const element = document.getElementById(elementId);
    if (element) {
      element.addEventListener(event, handler);
      console.log(`Event listener added for ${elementId}`);
    } else {
      console.warn(`Element not found: ${elementId}`);
    }
  }

  getCurrentPhase() {
    if (this.currentDay <= 10) return this.phases[0];
    if (this.currentDay <= 20) return this.phases[1];
    //  if (this.currentDay <= 30) return this.phases;
    return this.phases[2];
  }

  updateDashboard() {
    console.log("Updating dashboard...");
    const currentPhase = this.getCurrentPhase();

    this.updateElementText("current-day", this.currentDay);
    this.updateElementText(
      "current-phase",
      `${currentPhase.title} (第${currentPhase.phase}階段)`
    );

    // Update progress bar
    const progress = (this.currentDay / 100) * 100;
    const progressFill = document.getElementById("progress-fill");
    if (progressFill) {
      progressFill.style.width = `${progress}%`;
    }
    this.updateElementText("progress-text", `${Math.round(progress)}%`);

    // Update next milestone
    const nextMilestone = this.milestones.find((m) => m.day > this.currentDay);
    this.updateElementText(
      "next-milestone",
      nextMilestone ? `第${nextMilestone.day}天` : "已完成所有里程碑！"
    );

    // Update daily motivation
    const randomMessage =
      this.motivationalMessages[
        Math.floor(Math.random() * this.motivationalMessages.length)
      ];
    this.updateElementText("daily-motivation", randomMessage);

    console.log("Dashboard updated");
  }

  updateElementText(elementId, text) {
    const element = document.getElementById(elementId);
    if (element) {
      element.textContent = text;
    } else {
      console.warn(`Element not found: ${elementId}`);
    }
  }

  showView(viewId) {
    console.log(`Showing view: ${viewId}`);

    // Hide all views first
    const views = ["dashboard", "exercise-view", "progress-view"];
    views.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        element.style.display = "none";
        console.log(`Hiding view: ${id}`);
      }
    });

    // Show the requested view
    const targetView = document.getElementById(viewId);
    if (targetView) {
      targetView.style.display = "flex";
      console.log(`Showing view: ${viewId}`);
    } else {
      console.error(`View not found: ${viewId}`);
    }
  }

  showDashboard() {
    console.log("Showing dashboard");
    this.showView("dashboard");
  }

  showExerciseView() {
    console.log("Showing exercise view");
    this.showView("exercise-view");

    const currentPhase = this.getCurrentPhase();

    // Update exercise header
    this.updateElementText(
      "exercise-phase-title",
      `第${currentPhase.phase}階段：${currentPhase.title}`
    );
    this.updateElementText("exercise-focus", currentPhase.focus);

    // Reset exercise completion state
    this.currentExerciseCompletion.clear();

    // Populate exercise list
    this.renderExerciseList(currentPhase.exercises);

    // Reset timer
    this.resetTimer();
  }

  renderExerciseList(exercises) {
    console.log("Rendering exercise list...");
    const exerciseList = document.getElementById("exercise-list");
    if (!exerciseList) {
      console.error("Exercise list element not found");
      return;
    }

    exerciseList.innerHTML = "";

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

      // Add click listener for exercise details
      exerciseItem.addEventListener("click", () =>
        this.showExerciseDetails(exercise)
      );

      // Add checkbox functionality
      const checkbox = exerciseItem.querySelector(".exercise-checkbox");
      if (checkbox) {
        checkbox.addEventListener("click", (e) => {
          e.stopPropagation();
          this.toggleExerciseCompletion(index);
        });
      }

      exerciseList.appendChild(exerciseItem);
    });

    this.updateCompleteButton();
    console.log(`Rendered ${exercises.length} exercises`);
  }

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

  closeExerciseDetails() {
    const modal = document.getElementById("exercise-details-modal");
    if (modal) {
      modal.style.display = "none";
    }
  }

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

  pauseTimer() {
    console.log("Pausing timer");
    this.timerRunning = false;
    clearInterval(this.timerInterval);
  }

  resetTimer() {
    console.log("Resetting timer");
    this.timerRunning = false;
    this.timerSeconds = 15 * 60;
    clearInterval(this.timerInterval);
    this.updateTimerDisplay();

    const timerBtn = document.getElementById("timer-btn");
    if (timerBtn) {
      timerBtn.textContent = "開始計時";
      timerBtn.disabled = false;
    }
  }

  completeTimer() {
    console.log("Timer completed");
    this.pauseTimer();
    const timerBtn = document.getElementById("timer-btn");
    if (timerBtn) {
      timerBtn.textContent = "時間完成！";
      timerBtn.disabled = true;
    }
  }

  updateTimerDisplay() {
    const minutes = Math.floor(this.timerSeconds / 60);
    const seconds = this.timerSeconds % 60;
    const timeString = `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
    this.updateElementText("timer", timeString);
  }

  completeWorkout() {
    console.log("Completing workout");

    // Mark current day as completed
    this.completedDays.add(this.currentDay);

    // Check for milestone achievement
    const milestone = this.milestones.find((m) => m.day === this.currentDay);

    // Show success modal
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

    // Advance to next day (for demo purposes)
    this.currentDay = Math.min(this.currentDay + 1, 100);
    this.saveData();
  }

  closeModal() {
    const modal = document.getElementById("success-modal");
    if (modal) {
      modal.style.display = "none";
    }
    this.showDashboard();
    this.updateDashboard();
  }

  showProgressView() {
    console.log("Showing progress view");
    this.showView("progress-view");

    // Render calendar
    this.renderCalendar();

    // Render milestones
    this.renderMilestones();

    // Update streak info
    this.updateStreakInfo();
  }

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

  updateStreakInfo() {
    console.log("Updating streak info");
    // Calculate current streak
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

  saveData() {
    const data = {
      currentDay: this.currentDay,
      completedDays: Array.from(this.completedDays),
    };
    localStorage.setItem("seniorFitnessData", JSON.stringify(data));
    console.log("Data saved to localStorage");
  }

  loadData() {
    const data = localStorage.getItem("seniorFitnessData");
    if (data) {
      const parsedData = JSON.parse(data);
      this.currentDay = parsedData.currentDay;
      this.completedDays = new Set(parsedData.completedDays);
      console.log("Data loaded from localStorage");
    }
  }

  resetData() {
    localStorage.removeItem("seniorFitnessData");
    this.currentDay = 1;
    this.completedDays = new Set();
    console.log("Data reset");
    this.updateDashboard();
  }
}

// Initialize the app when the page loads
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM content loaded, initializing app");
  try {
    window.app = new SeniorFitnessApp();
    window.app.init();
  } catch (error) {
    console.error("Failed to initialize app:", error);
  }
});

<template>
    <div class="select-difficulty">
        <div
            class="select-difficulty-container"
            :class="{'show-customize':isShowCustomize}"
        >
            <div class="select-difficulty-section">
               <!-- /// <div class="select-difficulty-row"> -->
                    <div class="select-difficulty-item"  @click="$emit('showGame',8,8,10)" >
                        <p>8 x 8</p>
                        <p>10 个雷</p>
                    </div>
                    <div
                        class="select-difficulty-item"
                        @click="$emit('showGame',12,12,30)"
                    >
                        <div>12 x 12</div>
                        <div>30 个雷</div>
                    </div>
                <!-- </div> -->
                <!-- 触发当前实例上的事件 -->
                <!-- <div class="select-difficulty-row"> -->
                    <div
                        class="select-difficulty-item"
                        @click="$emit('showGame',16,16,50)"
                    >
                        <div>16 x 16</div>
                        <div>50 个雷</div>
                    </div>
                    <div
                        class="select-difficulty-item"
                        @click="isShowCustomize = true"
                    >
                        <div>?</div>
                        <div>自定义</div>
                    </div>
                <!-- </div> -->
            </div>
            <div class="select-difficulty-section">
                <div>
                    <div class="form-group">
                        <label class="form-label">
                            宽度
                        </label>
                        <MineSweeperInputNumber
                            v-model="width"
                            class="form-content"
                            :max="50"
                            :min="1"
                        />
                    </div>

                    <div class="form-group">
                        <label class="form-label">
                            高度
                        </label>
                        <MineSweeperInputNumber
                            v-model="height"
                            class="form-content"
                            :max="50"
                            :min="1"
                        />
                    </div>

                    <div class="form-group">
                        <label class="form-label">
                            雷数
                        </label>
                        <MineSweeperInputNumber
                            v-model="mineCount"
                            class="form-content"
                            :max="width*height"
                            :min="1"
                        />
                    </div>

                    <div class="form-group">
                        <button
                            class="mine-sweeper-button"
                            @click="$emit('showGame',width,height,mineCount)"
                        >
                            玩游戏
                        </button>
                    </div>

                    <div class="form-group">
                        <button
                            class="mine-sweeper-button"
                            @click="isShowCustomize = false"
                        >
                            取消
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>




<script>
import MineSweeperInputNumber from './MineSweeperInputNumber';
export default {
    name: 'SelectDifficulty',
    components: {
        MineSweeperInputNumber,
    },
    data () {
        return {
            isShowCustomize: false,
            // 是否显示为自定义
            width: 30,
            height: 16,
            mineCount: 99,
        };
    },
};
</script>


<style scoped>

.select-difficulty {
    overflow: hidden;
}

.select-difficulty-container {
    display: flex;
    transition: transform 0.5s ease;
}

.select-difficulty-container.show-customize {
    transform: translateX(-100%);
}

.select-difficulty-section {
    width: 100%;
    flex: 0 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.select-difficulty-row {
    display: flex;
    justify-content: center;
}

.select-difficulty-item {
    /* justify-content: center;  */
    width: 300px;
    height: 50px;
    margin: 15px;
    border: 2px solid #666;
    border-radius: 8px;
    text-align: center;
}

.form-group {
    margin-bottom: 15px;
}

.form-label {
    width: 80px;
    float: left;
}

.form-content {
    margin-left: 80px;
}
</style>

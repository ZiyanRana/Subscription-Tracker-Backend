import mongoose from "mongoose";

const subscriptionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Subscription name is required!"],
        trim: true,
        minLength: 3,
        maxLength: 20
    },
    price: {
        type: Number,
        required: [true, "Subscription price is required!"],
        min: [0, "Price must be greater than or equal to zero"]
    },
    currency: {
        type: String,
        enum: ['USD', 'PKR', 'INR', 'GBP'],
        required: [true, "Currency is required!"],
        default: 'PKR'
    },
    status: {
        type: String,
        enum: ['active', 'cancelled', 'expired'],
        default: 'active'
    },
    category: {
        type: String,
        required: [true, "Category is required"],
        enum: ['sports', 'entertainment', 'news', 'other']
    },
    frequency: {
        type: String,
        enum: ['Daily', 'Monthly', 'Weekly', 'Yearly'],
        required: [true, "Frequency is required!"]
    },
    startDate: {
        type: Date,
        required: [true, "Date is required!"],
        validator: {
            validate: function(value) {
                return value <= new Date();
            },
            message: "Start date cannot be in future!"
        }
    },
    endDate: {
        type: Date,
        validator: {
            validate: function(value) {
                return value > this.startDate;
            },
            message: "End date cannot be before start date!"
        }
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, "User name is required!"],
        index: true
    }
}, { timestamps: true });

subscriptionSchema.pre('save', (next) => {
    if (!this.endDate) {
        renewalPeriods = {
            Daily: 1,
            Weekly: 7,
            Monthly: 30,
            Yearly: 365
        }

        this.endDate = new Date(this.startDate);
        this.endDate.setDate(this.endDate.getDate() + renewalPeriods[this.frequency]);
    }

    if (endDate < startDate) {
        this.status = 'expired';
    }

    next();
});

const subscriptionModel = new mongoose.model("SubscriptionModel", subscriptionSchema);

export default subscriptionModel;
declare module '@capacitor/core' {
  interface PluginRegistry {
    Haptics: HapticsPlugin;
  }
}

export interface HapticsPlugin {
  /**
   * Trigger a haptics "impact" feedback
   *
   * @since 1.0.0
   */
  impact(options?: HapticsImpactOptions): Promise<void>;

  /**
   * Trigger a haptics "notification" feedback
   *
   * @since 1.0.0
   */
  notification(options?: HapticsNotificationOptions): Promise<void>;

  /**
   * Vibrate the device
   *
   * @since 1.0.0
   */
  vibrate(options?: VibrateOptions): Promise<void>;

  /**
   * Trigger a selection started haptic hint
   *
   * @since 1.0.0
   */
  selectionStart(): Promise<void>;

  /**
   * Trigger a selection changed haptic hint. If a selection was
   * started already, this will cause the device to provide haptic
   * feedback
   *
   * @since 1.0.0
   */
  selectionChanged(): Promise<void>;

  /**
   * If selectionStart() was called, selectionEnd() ends the selection.
   * For example, call this when a user has lifted their finger from a control
   *
   * @since 1.0.0
   */
  selectionEnd(): Promise<void>;
}

export interface HapticsImpactOptions {
  /**
   * Impact Feedback Style
   *
   * The mass of the objects in the collision simulated by a [UIImpactFeedbackGenerator](https://developer.apple.com/documentation/uikit/uiimpactfeedbackstyle) object.
   *
   * @default HapticsImpactStyle.Heavy
   * @since 1.0.0
   */
  style: HapticsImpactStyle;
}

export enum HapticsImpactStyle {
  /**
   * A collision between small, light user interface elements
   *
   * @since 1.0.0
   */
  Heavy = 'HEAVY',

  /**
   * A collision between moderately sized user interface elements
   *
   * @since 1.0.0
   */
  Medium = 'MEDIUM',

  /**
   * A collision between small, light user interface elements
   *
   * @since 1.0.0
   */
  Light = 'LIGHT',
}

export interface HapticsNotificationOptions {
  /**
   * Notification Feedback Type
   *
   * The type of notification feedback generated by a [UINotificationFeedbackGenerator](https://developer.apple.com/documentation/uikit/uinotificationfeedbacktype) object.
   *
   * @default HapticsNotificationType.SUCCESS
   * @since 1.0.0
   */
  type: HapticsNotificationType;
}

export enum HapticsNotificationType {
  /**
   * A notification feedback type indicating that a task has completed successfully
   *
   * @since 1.0.0
   */
  Success = 'SUCCESS',

  /**
   * A notification feedback type indicating that a task has produced a warning
   *
   * @since 1.0.0
   */
  Warning = 'WARNING',

  /**
   * A notification feedback type indicating that a task has failed
   *
   * @since 1.0.0
   */
  Error = 'ERROR',
}

export interface VibrateOptions {
  /**
   * Duration of the vibration in milliseconds.
   *
   * Not supported in iOS.
   *
   * @default 300
   * @since 1.0.0
   */
  duration: number;
}

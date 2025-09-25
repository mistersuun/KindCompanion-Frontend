import { Component, Input, Output, EventEmitter, forwardRef, OnInit, OnChanges } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CommonModule } from '@angular/common';

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

@Component({
  selector: 'app-custom-select',
  standalone: true,
  imports: [CommonModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomSelectComponent),
      multi: true
    }
  ],
  template: `
    <div class="custom-select"
         [class.open]="isOpen"
         [class.disabled]="disabled"
         [class.error]="hasError">

      <!-- Selected Value Display -->
      <div class="select-trigger"
           (click)="toggleDropdown(); $event.stopPropagation()"
           [attr.tabindex]="disabled ? -1 : 0"
           (keydown)="onKeyDown($event)"
           role="combobox"
           [attr.aria-expanded]="isOpen"
           [attr.aria-haspopup]="true">

        <span class="select-value" [class.placeholder]="!selectedOption">
          {{ selectedOption ? selectedOption.label : placeholder }}
        </span>

        <div class="select-arrow" [class.rotated]="isOpen">
          <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
            <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </div>

      <!-- Dropdown Options -->
      <div class="select-dropdown" *ngIf="isOpen" (click)="$event.stopPropagation()">
        <div class="select-options">
          <div *ngFor="let option of options; trackBy: trackByFn"
               class="select-option"
               [class.selected]="option.value === value"
               [class.disabled]="option.disabled"
               (click)="selectOption(option)"
               [attr.role]="'option'"
               [attr.aria-selected]="option.value === value">
            {{ option.label }}
          </div>
        </div>
      </div>
    </div>

    <!-- Backdrop -->
    <div class="select-backdrop"
         *ngIf="isOpen"
         (click)="closeDropdown()"></div>
  `,
  styles: [`
    .custom-select {
      position: relative;
      width: 100%;
      overflow: visible;
    }

    .custom-select.open {
      z-index: 10000;
    }

    .select-trigger {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: var(--spacing-3) var(--spacing-4);
      border: 2px solid var(--color-gray-300);
      border-radius: var(--radius-md);
      background: white;
      cursor: pointer;
      transition: all var(--transition-normal);
      min-height: 48px;
      font-size: var(--font-size-base);
    }

    .select-trigger:hover:not(.disabled) {
      border-color: var(--color-primary);
    }

    .select-trigger:focus {
      outline: none;
      border-color: var(--color-primary);
      box-shadow: 0 0 0 3px rgba(0, 122, 255, 0.1);
    }

    .custom-select.open .select-trigger {
      border-color: var(--color-primary);
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      box-shadow: 0 0 0 3px rgba(0, 122, 255, 0.1);
    }

    .custom-select.error .select-trigger {
      border-color: var(--color-error);
    }

    .custom-select.disabled .select-trigger {
      background: var(--color-gray-100);
      cursor: not-allowed;
      opacity: 0.7;
    }

    .select-value {
      flex: 1;
      text-align: left;
      color: var(--color-text-primary);
      font-weight: var(--font-weight-medium);
    }

    .select-value.placeholder {
      color: var(--color-text-tertiary);
      font-weight: var(--font-weight-normal);
    }

    .select-arrow {
      display: flex;
      align-items: center;
      color: var(--color-text-secondary);
      transition: transform var(--transition-normal);
      margin-left: var(--spacing-2);
    }

    .select-arrow.rotated {
      transform: rotate(180deg);
    }

    .select-dropdown {
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      background: white;
      border: 2px solid var(--color-primary);
      border-top: none;
      border-bottom-left-radius: var(--radius-md);
      border-bottom-right-radius: var(--radius-md);
      box-shadow: var(--shadow-lg);
      z-index: 10002;
      max-height: 280px;
      overflow-y: auto;
    }

    .select-options {
      padding: var(--spacing-2) 0;
    }

    .select-option {
      padding: var(--spacing-3) var(--spacing-4);
      cursor: pointer;
      transition: background-color var(--transition-fast);
      font-size: var(--font-size-base);
      color: var(--color-text-primary);
    }

    .select-option:hover:not(.disabled) {
      background: var(--color-primary-light);
    }

    .select-option.selected {
      background: var(--color-primary);
      color: white;
      font-weight: var(--font-weight-semibold);
    }

    .select-option.disabled {
      color: var(--color-text-tertiary);
      cursor: not-allowed;
      opacity: 0.5;
    }

    .select-backdrop {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 10001;
    }

    /* Custom scrollbar for dropdown */
    .select-dropdown::-webkit-scrollbar {
      width: 6px;
    }

    .select-dropdown::-webkit-scrollbar-track {
      background: var(--color-gray-100);
    }

    .select-dropdown::-webkit-scrollbar-thumb {
      background: var(--color-gray-400);
      border-radius: 3px;
    }

    .select-dropdown::-webkit-scrollbar-thumb:hover {
      background: var(--color-gray-500);
    }

    /* Responsive adjustments */
    @media (max-width: 768px) {
      .select-trigger {
        min-height: 52px;
        font-size: var(--font-size-lg);
      }

      .select-dropdown {
        max-height: 240px;
      }

      .select-option {
        padding: var(--spacing-4) var(--spacing-4);
        font-size: var(--font-size-lg);
      }
    }

    /* Animation for dropdown */
    .select-dropdown {
      animation: slideDown 0.15s ease-out;
    }

    @keyframes slideDown {
      from {
        opacity: 0;
        transform: translateY(-8px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `]
})
export class CustomSelectComponent implements ControlValueAccessor, OnInit, OnChanges {
  @Input() options: SelectOption[] = [];
  @Input() placeholder: string = 'Select an option';
  @Input() disabled: boolean = false;
  @Input() hasError: boolean = false;
  @Output() selectionChange = new EventEmitter<SelectOption | null>();

  value: string = '';
  isOpen: boolean = false;
  selectedOption: SelectOption | null = null;

  private onChange = (_value: any) => {};
  private onTouched = () => {};

  constructor() {
    // Close dropdown when clicking outside
    document.addEventListener('click', (event) => {
      const target = event.target as HTMLElement;
      if (this.isOpen && !target.closest('.custom-select')) {
        this.closeDropdown();
      }
    });
  }

  ngOnInit() {
    this.updateSelectedOption();
  }

  ngOnChanges() {
    this.updateSelectedOption();
  }

  toggleDropdown() {
    if (this.disabled) return;

    this.isOpen = !this.isOpen;
    if (!this.isOpen) {
      this.onTouched();
    }
  }

  closeDropdown() {
    this.isOpen = false;
    this.onTouched();
  }

  selectOption(option: SelectOption) {
    if (option.disabled) return;

    this.value = option.value;
    this.selectedOption = option;
    this.onChange(this.value);
    this.selectionChange.emit(option);
    this.closeDropdown();
  }

  onKeyDown(event: KeyboardEvent) {
    if (this.disabled) return;

    switch (event.key) {
      case 'Enter':
      case ' ':
        event.preventDefault();
        this.toggleDropdown();
        break;
      case 'Escape':
        if (this.isOpen) {
          event.preventDefault();
          this.closeDropdown();
        }
        break;
      case 'ArrowDown':
        event.preventDefault();
        if (!this.isOpen) {
          this.toggleDropdown();
        } else {
          this.navigateOptions(1);
        }
        break;
      case 'ArrowUp':
        event.preventDefault();
        if (this.isOpen) {
          this.navigateOptions(-1);
        }
        break;
    }
  }

  private navigateOptions(direction: number) {
    const enabledOptions = this.options.filter(option => !option.disabled);
    if (enabledOptions.length === 0) return;

    const currentIndex = this.selectedOption
      ? enabledOptions.findIndex(option => option.value === this.selectedOption!.value)
      : -1;

    let newIndex = currentIndex + direction;
    if (newIndex < 0) newIndex = enabledOptions.length - 1;
    if (newIndex >= enabledOptions.length) newIndex = 0;

    this.selectOption(enabledOptions[newIndex]);
  }

  trackByFn(_index: number, option: SelectOption): string {
    return option.value;
  }

  private updateSelectedOption() {
    this.selectedOption = this.options.find(option => option.value === this.value) || null;
  }

  // ControlValueAccessor implementation
  writeValue(value: any): void {
    this.value = value || '';
    this.updateSelectedOption();
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
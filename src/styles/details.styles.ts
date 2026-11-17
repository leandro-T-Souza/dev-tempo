import { StyleSheet } from "react-native";
import { colors, spacing } from "./colors";

export const detailsStyles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },

  container: {
    flex: 1,
    padding: spacing.md,
  },

  backButton: {
    marginBottom: spacing.md,
  },

  backButtonText: {
    color: colors.primary,
    fontSize: 16,
    fontWeight: "bold",
  },

  header: {
    alignItems: "center",
    marginBottom: spacing.lg,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.text,
  },

  subTitle: {
    fontSize: 16,
    color: colors.textSecondary,
    marginTop: spacing.sm,
  },

  loadingContainer: {
    alignItems: "center",
    marginTop: spacing.lg,
  },

  loadingText: {
    marginTop: spacing.sm,
    color: colors.textSecondary,
  },

  errorContainer: {
    alignItems: "center",
    backgroundColor: colors.cardBackground,
    borderRadius: 16,
    padding: spacing.md,
    marginHorizontal: spacing.md,
  },

  errorText: {
    color: "red",
    fontSize: 20,
    textAlign: "center",
    marginBottom: spacing.md,
    fontWeight: '600'
  },

  retryButton: {
    backgroundColor: colors.primary,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
    borderRadius: 8,
  },

  retryButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});